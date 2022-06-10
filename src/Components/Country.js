import React from 'react';
import { v4 as uuid } from 'uuid';
import noFlagImage from '../images/noFlag.png';

const Country = ({ country }) => {
  const countryNameUrl = country.name.replaceAll(' ', '%20');
  const countryCapitalUrl = country.capital
    ? country.capital.replaceAll(' ', '%20')
    : 'N/A';
  let area = 'unavailable';
  if (country.area !== null) {
    area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let languages = [];
  country.languages.forEach((language) => {
    languages.push(language.name);
  });
  let languagesList = languages.map((language, index) => {
    let languageUrl = language.replaceAll(' ', '%20') + '%20language';
    let seperator = '';
    if (index + 1 !== languages.length) {
      seperator = ', ';
    }
    return (
      <a
        key={uuid()}
        href={`https://en.wikipedia.org/wiki/Special:Search/${languageUrl}`}
      >
        {language}
        {seperator}
      </a>
    );
  });

  let currencies = [];
  if (!country.currencies) {
    console.log(country);
  }
  country.currencies.forEach((currency) => {
    if (currency.symbol !== null) {
      currencies.push(currency.symbol + ' ' + currency.name);
    } else {
      currencies.push(currency.name);
    }
  });
  console.log(currencies);
  let currencyList = currencies.map((currency, index) => {
    let currencyUrl = currency + '%20currency';
    let seperator = '';
    if (index + 1 !== currencies.length) {
      seperator = ', ';
    }
    return (
      <a
        key={uuid()}
        href={`https://en.wikipedia.org/wiki/Special:Search/${currencyUrl}`}
      >
        {currency}
        {seperator}
      </a>
    );
  });

  console.log(currencyList);

  let timezones = [];
  country.timezones.forEach((timezone) => {
    timezones.push(' ' + timezone);
  });

  const fallbackFlag = (e) => {
    if (e.target.src !== noFlagImage) {
      e.target.onerror = null;
      e.target.src = noFlagImage;
    }
  };

  return (
    <div role='region' aria-label={country.name} className='card country'>
      <div className='details'>
        <a
          href={`https://en.wikipedia.org/wiki/Special:Search/${countryNameUrl}`}
        >
          <h2 className='row countryName'>
            {country.name}&nbsp; ({country.alpha3Code})
          </h2>
          <div className='row countryNameNative'>{country.nativeName}</div>
          <div className='row'>
            <img
              className='flag'
              src={country.flag}
              onError={(e) => fallbackFlag(e)}
              alt={`Flag of ${country.name}`}
            />
          </div>
        </a>

        <div className='row'>
          <div className='labels'>
            <p>Capital</p>
          </div>
          <div className='data'>
            {country.capital ? (
              <a
                href={`https://en.wikipedia.org/wiki/Special:Search/${countryCapitalUrl}`}
              >
                <p>{country.capital}</p>
              </a>
            ) : (
              <p>(none)</p>
            )}
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Area</p>
          </div>
          <div className='data'>
            <p>{area} sq km</p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Population</p>
          </div>
          <div className='data'>
            <p>
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Languages</p>
          </div>
          <div className='data'>
            <p>
              [{languages.length}] {languagesList}
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Currencies</p>
          </div>
          <div className='data'>
            <p>
              [{currencies.length}] {currencyList}
              {/* {currencies.join(', ')} */}
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Timezones</p>
          </div>
          <div className='data'>
            <p>
              [{timezones.length}]{timezones}
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Domain</p>
          </div>
          <div className='data'>
            <p>{country.topLevelDomain}</p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Calling Code</p>
          </div>
          <div className='data'>
            <p>+{country.callingCodes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
