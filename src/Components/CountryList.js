import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
import { arraySort } from '../Utils';
import axios from 'axios';

const CountryList = ({ setResponseTime, filter, searchString, dataLocal }) => {
  const [countries, setCountries] = useState('');

  let countryList = dataLocal ? dataLocal : [];

  let url = `https://restcountries.com/v3.1/${filter}`;

  useEffect(() => {
    const getFilteredCountries = async (filter) => {
      let response = undefined;
      let t0 = undefined;
      let t1 = undefined;
      t0 = performance.now();
      try {
        response = await axios.get(url);
      } catch (error) {
        console.log(`Error getting data from: ${url}`);
        console.log(error.response.data.error);
        console.log('Using local data...');
      }

      t1 = performance.now();
      setResponseTime('Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's');
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
        languages = Object.values(country.languages).join(' ');
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
      return (
        <Country key={uuid()} countries={countries.length} country={country} />
      );
    });
  }

  return (
    <main aria-label='Country list' className='CountryList'>
      {countryList}
    </main>
  );
};

export default CountryList;
