import React from 'react';

const RegionSelect = ({ filter, setFilter, setSearchString }) => {
  return (
    <div className='formField'>
      <label htmlFor='regionSelect'>Region select</label>
      <select
        id='regionSelect'
        name='regionSelect'
        value={filter}
        onChange={(e) => {
          setSearchString('');
          setFilter(e.target.value);
        }}
      >
        <option value='all'>All Countries</option>
        <option disabled>Regions:</option>
        <option value='region/africa'>Africa</option>
        <option value='region/americas'>Americas</option>
        <option value='region/asia'>Asia</option>
        <option value='region/europe'>Europe</option>
        <option value='region/oceania'>Oceania</option>
        <option disabled>Regional Blocks:</option>
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
    </div>
  );
};

export default RegionSelect;
