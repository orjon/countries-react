import React from 'react';
import RegionSelect from './RegionSelect';
import RegionSearch from './RegionSearch';
import Logo from '../images/logo.png';

const AppHeader = ({
  responseTime,
  filter,
  setFilter,
  searchString,
  setSearchString,
}) => {
  return (
    <header className='AppHeader'>
      <div className='card'>
        <div className='row titleBar'>
          <div className='leftSide'>
            <h1>React.js RESTCountries.com API</h1>
            <div className='responseTime'>{responseTime}</div>
          </div>
          <img className='logo' src={Logo} alt='website logo' />
        </div>
        <form role='search' className='row searchBar'>
          <RegionSelect
            filter={filter}
            setFilter={setFilter}
            setSearchString={setSearchString}
          />
          <RegionSearch
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </form>
      </div>
    </header>
  );
};

export default AppHeader;
