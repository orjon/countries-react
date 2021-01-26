import React, { useState } from 'react';
import AppHeader from './Components/AppHeader';
import CountryList from './Components/CountryList';
import './scss/App.scss';

const App = () => {
  const [responseTime, setResponseTime] = useState('Fetching data...');
  const [filter, setFilter] = useState('all');
  const [searchString, setSearchString] = useState('');

  console.log('Search: ', searchString);

  return (
    <div className='App'>
      <AppHeader
        responseTime={responseTime}
        filter={filter}
        setFilter={setFilter}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <CountryList
        setResponseTime={setResponseTime}
        filter={filter}
        searchString={searchString}
      />
    </div>
  );
};

export default App;
