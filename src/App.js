import React, { useState } from 'react';
import AppHeader from './Components/AppHeader';
import CountryList from './Components/CountryList';
import './scss/App.scss';

const App = () => {
  const [responseTime, setResponseTime] = useState('Fetching data...');
  const [filterCountries, setFilterCountries] = useState('all');

  return (
    <div className='App'>
      <AppHeader
        responseTime={responseTime}
        filterCountries={filterCountries}
        setFilterCountries={setFilterCountries}
      />
      <CountryList
        setResponseTime={setResponseTime}
        filterCountries={filterCountries}
      />
    </div>
  );
};

export default App;
