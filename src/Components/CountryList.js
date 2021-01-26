import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
import axios from 'axios';

const CountryList = ({ setResponseTime, filter, searchString }) => {
  const [countries, setCountries] = useState('');

  console.log('Filter: ', filter);

  let countryList = [];

  useEffect(() => {
    const getFilteredCountries = async (filter) => {
      let t0 = undefined;
      let t1 = undefined;
      console.log('Getting countries...');
      t0 = performance.now();

      let response = await axios.get(
        `https://restcountries.eu/rest/v2/${filter}`,
        {
          headers: { Accept: 'application/json' },
        }
      );

      t1 = performance.now();
      setResponseTime('Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's');
      setCountries(response.data);
    };
    getFilteredCountries(filter);
  }, [filter, setResponseTime, setCountries]);

  const getSearchedCountries = (searchString) => {
    const regExSearch = new RegExp(searchString, 'i');
    return countries.filter((country) => {
      return regExSearch.test(country.name);
    });
  };

  if (countries.length !== 0) {
    countryList = getSearchedCountries(searchString).map((country) => {
      return <Country key={uuid()} country={country} />;
    });
  }

  return <div className='CountryList'>{countryList}</div>;
};

export default CountryList;
