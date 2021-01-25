import React from 'react';

const FilterAndSearch = () => {
  return (
    <div className='FilterAndSearch'>
      <select id='filterSelect'>
        <option value='all' selected>
          All
        </option>
        <option value='region/africa'>Africa</option>
        <option value='region/americas'>Americas</option>
        <option value='region/asia'>Asia</option>
        <option value='region/europe'>Europe</option>
        <option value='region/oceania'>Oceania</option>
        <option disabled>----------</option>
        <option value='regionalbloc/eu'>EU (European Union)</option>
        <option value='regionalbloc/nafta'>
          NAFTA (North American Free Trade Agreement)
        </option>
        <option value='regionalbloc/usan'>
          USAN (Union of South American Nations)
        </option>
        <option value='regionalbloc/au'>AU (African Union)</option>
        <option value='regionalbloc/pa'>PA (Pacific Alliance)</option>
        <option value='regionalbloc/caricom'>
          CARICOM (Caribbean Community)
        </option>
      </select>
      <input id='search' type='text' placeholder='Search...'></input>
    </div>
  );
};

export default FilterAndSearch;
