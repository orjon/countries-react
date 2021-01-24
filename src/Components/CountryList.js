import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
import axios from 'axios';

const CountryList = () => {
  const [countries, setCountries] = useState('');

  // API response time vars
  let responseTime = 'Connecting...';
  let countryList = [];

  const getSpecificCountries = async (filter = 'all') => {
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
    responseTime = 'Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's';

    setCountries(response.data);
  };

  useEffect(() => {
    if (countries.length === 0) {
      getSpecificCountries();
    }
  }, []);

  if (countries.length !== 0) {
    console.log(countries);
    console.log('Making country list');
    countryList = countries.map((country) => {
      return <Country key={uuid()} country={country} />;
    });
  }

  return <div className='CountryList'>{countryList}</div>;
};

export default CountryList;
