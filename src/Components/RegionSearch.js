import React from 'react';

const RegionSearch = ({ filter, searchString, setSearchString }) => {
  const regionMap = {
    all: 'All Countries',
    'region/africa': 'Africa',
    'region/americas': 'Americas',
    'region/asia': 'Asia',
    'region/europe': 'Europe',
    'region/oceania': 'Oceania',
    'regionalbloc/eu': 'EU (European Union)',
    'regionalbloc/nafta': 'NAFTA (North American Free Trade Agreement)',
    'regionalbloc/usan': 'USAN (Union of South American Nations)',
    'regionalbloc/au': 'AU (African Union)',
    'regionalbloc/pa': 'PA (Pacific Alliance)',
    'regionalbloc/caricom': 'CARICOM (Caribbean Community)'
  };

  return (
    <div className='formField'>
      <label htmlFor='regionSearch'>Search in {regionMap[filter]}...</label>
      <input
        id='regionSearch'
        className='shadow'
        name='regionSearch'
        type='text'
        placeholder='Search...'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value.trim())}
      ></input>
    </div>
  );
};

export default RegionSearch;
