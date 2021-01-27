import React from 'react';

const FilterSearch = ({ searchString, setSearchString }) => {
  return (
    <div className='formField'>
      <label htmlFor='searchInRegion'>Search in region</label>
      <input
        id='FilterSearch'
        name='searchInRegion'
        type='text'
        placeholder='Search...'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value.trim())}
      ></input>
    </div>
  );
};

export default FilterSearch;
