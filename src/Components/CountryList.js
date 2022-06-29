import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
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

      t1 = performance.now();
      setResponseTime('Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's');
      // Filter out UK because of Brexit
      // if (filter === 'regionalbloc/eu') {
      //   correctedResponse = correctedResponse.filter(
      //     (country) => country.nativeName !== 'United Kingdom'
      //   );
      // }
      setCountries(response.data);
    };
    getFilteredCountries(filter);
  }, [filter, setResponseTime, setCountries]);

  const getSearchedCountries = (searchString) => {
    const regExSearch = new RegExp(searchString, 'i');
    const regExWordSearch = new RegExp(`\\b${searchString}\\b`, 'i');

    return countries.filter((country) => {
      return (
        regExSearch.test(country.name.common) ||
        regExSearch.test(country.capital) ||
        regExWordSearch.test(country.alpha2Code) ||
        regExWordSearch.test(country.alpha3Code) ||
        regExSearch.test(country.demonym) ||
        regExSearch.test(country.name.nativeName) ||
        regExSearch.test(
          country.languages
            .map((language) => {
              return language.name;
            })
            .join(' ')
        ) ||
        regExWordSearch.test(country.topLevelDomain.join(' ')) ||
        regExWordSearch.test(
          country.currencies
            .map((currency) => {
              return currency.name;
            })
            .join(' ')
        )
      );
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
