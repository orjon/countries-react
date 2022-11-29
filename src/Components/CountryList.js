import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Country from './Country';
import { sourceUrl } from '../Constants';
import { arraySort } from '../Utils/index';

const CountryList = ({
  setResponseTime,
  filter,
  searchString,
  sortBy,
  dataLocal
}) => {
  const [countries, setCountries] = useState('');

  let countriesFiltered = dataLocal ? dataLocal : [];

  let url = `${sourceUrl}${filter}`;

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
      setCountries(arraySort(response.data, sortBy));
    };
    getFilteredCountries(filter);
  }, [filter, setResponseTime, sortBy, setCountries]);

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
      );
    });
  };

  if (countries.length !== 0) {
    countriesFiltered = getSearchedCountries(searchString).map((country) => {
      return (
        <Country key={uuid()} countries={countries.length} country={country} />
      );
    });
  }

  return (
    <main aria-label='Country list' className='CountryList'>
      {countriesFiltered}
    </main>
  );
};

export default CountryList;
