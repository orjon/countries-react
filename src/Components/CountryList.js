import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Country from './Country';
import axios from 'axios';

const CountryList = ({ setResponseTime, filterCountries }) => {
  const [countries, setCountries] = useState('');

  console.log('Filter: ', filterCountries);

  let countryList = [];

  const getSpecificCountries = async (filterCountries) => {
    let t0 = undefined;
    let t1 = undefined;
    console.log('Getting countries...');
    t0 = performance.now();

    let response = await axios.get(
      `https://restcountries.eu/rest/v2/${filterCountries}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    t1 = performance.now();
    setResponseTime('Response time: ' + ((t1 - t0) / 1000).toFixed(3) + 's');

    setCountries(response.data);
  };

  useEffect(() => {
    getSpecificCountries(filterCountries);
  }, [filterCountries]);

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
