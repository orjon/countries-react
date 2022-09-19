import React from 'react';
import { v4 as uuid } from 'uuid';
import noFlagImage from '../images/noFlag.png';

const Country = ({ country }) => {
  // console.log(country.name.common);
  // console.log(country);
  const countryNameUrl = country.name.common.replaceAll(' ', '%20');
  const countryCapital = country.capital ? country.capital[0] : 'N/A';
  const countryCapitalUrl = country.capital
    ? country.capital[0].replaceAll(' ', '%20')
    : 'N/A';
  let area = 'unavailable';
  if (country.area !== null) {
    area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let languages = [];
  if (country.languages) {
    // console.log(country.languages);
    languages = Object.values(country.languages);
  } else {
    console.log('No languages', country.name.common);
  }

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
    console.log('No currencies:', country.name.common);
  } else {
    Object.keys(country.currencies).forEach((currency) => {
      const thisCurrency = country.currencies[currency];
      if (thisCurrency.symbol !== null) {
        currencies.push(thisCurrency.symbol + ' ' + thisCurrency.name);
      } else {
        currencies.push(thisCurrency.name);
      }
    });
  }

  // console.log(currencies);

  // let currencyList = currencies.map((currency, index) => {
  //   let currencyUrl = currency + '%20currency';
  //   let seperator = '';
  //   if (index + 1 !== currencies.length) {
  //     seperator = ', ';
  //   }
  //   return (
  //     <a
  //       key={uuid()}
  //       href={`https://en.wikipedia.org/wiki/Special:Search/${currencyUrl}`}
  //     >
  //       {currency}
  //       {seperator}
  //     </a>
  //   );
  // });

  // console.log(currencyList);

  const timezones = [];
  country.timezones.forEach((timezone) => {
    timezones.push(' ' + timezone);
  });

  let domains = 'N/A';
  if (country.tld) {
    domains = country.tld.join(', ');
  }

  let dialingCode = country.idd.root;
  if (country.idd.suffixes && country.idd.suffixes.length == 1) {
    dialingCode = dialingCode + country.idd.suffixes[0];
  }

  const fallbackFlag = (e) => {
    if (e.target.src !== noFlagImage) {
      e.target.onerror = null;
      e.target.src = noFlagImage;
    }
  };

  return (
    <div
      role='region'
      aria-label={country.name.common}
      className='card country'
    >
      <div className='details'>
        <a
          href={`https://en.wikipedia.org/wiki/Special:Search/${countryNameUrl}`}
        >
          <h2 className='row countryName'>
            {country.name.common}&nbsp;({country.cca3})
          </h2>
          {/* <div className='row countryNameNative'>{country.name.nativeName}</div> */}
          <div className='row countryNameOfficial'>{country.name.official}</div>
          <div className='row'>
            <img
              className='flag shadow'
              src={country.flags.svg}
              onError={(e) => fallbackFlag(e)}
              alt={`Flag of ${country.name.common}`}
            />
          </div>
        </a>

        <div className='row'>
          <div className='labels'>
            <p>Capital</p>
          </div>
          <div className='data'>
            {countryCapital ? (
              <a
                href={`https://en.wikipedia.org/wiki/Special:Search/${countryCapitalUrl}`}
              >
                <p>{countryCapital}</p>
              </a>
            ) : (
              <p>N/A</p>
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
              [{currencies.length}] {currencies.join(', ')}
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
            <p>Domains</p>
          </div>
          <div className='data'>
            <p>{domains}</p>
          </div>
        </div>

        <div className='row'>
          <div className='labels'>
            <p>Calling Code</p>
          </div>
          <div className='data'>
            <p>{dialingCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
