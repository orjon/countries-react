import React from 'react';
import FilterAndSearch from './FilterAndSearch';
import Logo from '../images/logo.png';

const AppHeader = ({ responseTime }) => {
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
        <FilterAndSearch />
      </div>
    </header>
  );
};

export default AppHeader;
