import React from 'react';

const RegionSearch = ({ filter, searchString, setSearchString }) => {
  const regionMap = {
    all: 'All Countries',
    'region/africa': 'Africa',
    'region/americas': 'Americas',
    'region/antarctic': 'Antarctic',
    'region/asia': 'Asia',
    'region/europe': 'Europe',
    'region/oceania': 'Oceania'
  };

  return (
    <div className='formField'>
      <label htmlFor='regionSearch'>
        Search within: {regionMap[filter]}...
      </label>
      <input
        className='regionSearch shadow'
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
