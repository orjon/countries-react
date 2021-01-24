import React from 'react';
import AppHeader from './Components/AppHeader';
import CountryList from './Components/CountryList';
import './scss/App.scss';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <CountryList />
    </div>
  );
}

export default App;
