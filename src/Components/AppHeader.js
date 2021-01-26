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
            <h2>React.js RESTCountries.eu API</h2>
            <h4 className='responseTime'>{responseTime}</h4>
          </div>
          <img className='logo' src={Logo} alt='countries icon' />
        </div>
        <div className='row searchBar'>
          <FilterSelect
            filter={filter}
            setFilter={setFilter}
            setSearchString={setSearchString}
          />
          <FilterSearch
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
