import React from 'react';
import FilterSelect from './FilterSelect';
import FilterSearch from './FilterSearch';
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
            <h1>React.js RESTCountries.eu API</h1>
            <div className='responseTime'>{responseTime}</div>
          </div>
          <img className='logo' src={Logo} alt='website logo' />
        </div>
        <form className='row searchBar'>
          <FilterSelect
            filter={filter}
            setFilter={setFilter}
            setSearchString={setSearchString}
          />
          <FilterSearch
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </form>
      </div>
    </header>
  );
};

export default AppHeader;
