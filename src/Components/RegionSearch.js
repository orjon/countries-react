import React from 'react';

const RegionSearch = ({ searchString, setSearchString }) => {
  return (
    <div className='formField'>
      <label htmlFor='regionSearch'>Search in region</label>
      <input
        id='regionSearch'
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
