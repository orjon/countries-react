import React from 'react';

const FilterSearch = ({ searchString, setSearchString }) => {
  return (
    <input
      id='FilterSearch'
      type='text'
      placeholder='Search in results...'
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
    ></input>
  );
};

export default FilterSearch;
