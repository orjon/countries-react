import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
import { arraySort } from '../Utils';
import axios from 'axios';

const CountryList = ({ setResponseTime, filter, searchString }) => {
  const [countries, setCountries] = useState('');

  let countryList = [];

  useEffect(() => {
    const getFilteredCountries = async (filter) => {
      let t0 = undefined;
      let t1 = undefined;
      t0 = performance.now();

      let response = await axios.get(
        `https://restcountries.com/v3.1/${filter}`
      );

      console.log(response.data);

      t1 = performance.now();
      setResponseTime('Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's');
      // Filter out UK because of Brexit
      // if (filter === 'regionalbloc/eu') {
      //   correctedResponse = correctedResponse.filter(
      //     (country) => country.nativeName !== 'United Kingdom'
      //   );
      // }

      setCountries(arraySort(response.data, 'name.common'));
    };
    getFilteredCountries(filter);
  }, [filter, setResponseTime, setCountries]);

  const getSearchedCountries = (searchString) => {
    const regExSearch = new RegExp(searchString, 'i');
    const regExWordSearch = new RegExp(`\\b${searchString}\\b`, 'i');

    return countries.filter((country) => {
      let languages = [];
      if (country.languages) {
        console.log(country.languages);
        languages = Object.values(country.languages).join(' ');
        console.log(languages);
      }

      return (
        regExSearch.test(country.name.common) ||
        regExSearch.test(country.name.official) ||
        regExSearch.test(country.capital) ||
        regExWordSearch.test(country.cca3) ||
        regExSearch.test(country.demonym) ||
        regExSearch.test(country.name.nativeName) ||
        regExSearch.test(languages)
        // regExWordSearch.test(country.topLevelDomain.join(' '))
      );
      // regExWordSearch.test(
      //   country.currencies
      //     .map((currency) => {
      //       return currency.name;
      //     })
      //     .join(' ')
      // )
    });
  };

  if (countries.length !== 0) {
    countryList = getSearchedCountries(searchString).map((country) => {
      return <Country key={uuid()} country={country} />;
    });
  }

  return (
    <main aria-label='Country list' className='CountryList'>
      {countryList}
    </main>
  );
};

export default CountryList;
