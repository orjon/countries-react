import React from 'react';

const RegionSort = ({ sortBy, setSortBy }) => {
  return (
    <div className='formField'>
      <label htmlFor='sortBy'>Sort By:</label>
      <select
        className='sortBy shadow'
        name='sortBy'
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value='name.common'>Name</option>
        <option value='capital'>Capital</option>
        <option value='population'>Population</option>
        <option value='area'>Area</option>
        <option value='phone'>Telephone Code</option>
      </select>
    </div>
  );
};

export default RegionSort;
