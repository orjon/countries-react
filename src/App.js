import React, { useState } from 'react';
import AppHeader from './Components/AppHeader';
import CountryList from './Components/CountryList';
import './scss/App.scss';

const App = () => {
  const [responseTime, setResponseTime] = useState('Fetching data...');
  const [filter, setFilter] = useState('all');
  const [searchString, setSearchString] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [dataLocal, setdataLocal] = useState('');

  return (
    <div className='App'>
      <AppHeader
        responseTime={responseTime}
        filter={filter}
        setFilter={setFilter}
        searchString={searchString}
        setSearchString={setSearchString}
        sortBy={sortBy}
        setSortBy={setSortBy}
        dataLocal={dataLocal}
        setdataLocal={setdataLocal}
      />
      <CountryList
        setResponseTime={setResponseTime}
        filter={filter}
        searchString={searchString}
        sortBy={sortBy}
        dataLocal={dataLocal}
      />
    </div>
  );
};

export default App;
