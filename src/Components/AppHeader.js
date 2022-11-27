import { React, Fragment } from 'react';
import RegionSelect from './RegionSelect';
import RegionSearch from './RegionSearch';
import Logo from '../images/logo.png';

const AppHeader = ({
  responseTime,
  filter,
  setFilter,
  searchString,
  setSearchString
}) => {
  const searchBars = (
    <Fragment>
      <RegionSelect
        filter={filter}
        setFilter={setFilter}
        setSearchString={setSearchString}
      />
      <RegionSearch
        filter={filter}
        searchString={searchString}
        setSearchString={setSearchString}
      />
    </Fragment>
  );
  return (
    <header className='card AppHeader'>
      <div className='row titleBar'>
        <img className='logo2' src={Logo} alt='website logo' />
        <div className='titleWrapper'>
          <h1 className='appTitle'>World Countries</h1>
          <div className='responseTime'>{responseTime}</div>
          <form role='search' className='row searchBar medium'>
            {searchBars}
          </form>
        </div>
        <img className='logo' src={Logo} alt='website logo' />
        <form role='search' className='row searchBar large'>
          {searchBars}
        </form>
      </div>
      <form role='search' className='row searchBar small'>
        {searchBars}
      </form>
    </header>
  );
};

export default AppHeader;
