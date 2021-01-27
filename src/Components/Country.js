import React from 'react';

const Country = ({ country }) => {
  let countryNameUrl = country.name.replaceAll(' ', '%20');
  let countryCapitalUrl = country.capital.replaceAll(' ', '%20');
  let area = 'unavailable';
  if (country.area !== null) {
    area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  var languages = [];
  country.languages.forEach((language) => {
    languages.push(language.name);
  });

  var currencies = [];
  country.currencies.forEach((currency) => {
    if (currency.symbol !== null) {
      currencies.push(currency.symbol + ' ' + currency.name);
    } else {
      currencies.push(currency.name);
    }
  });

  var timezones = [];
  country.timezones.forEach((timezone) => {
    timezones.push(' ' + timezone);
  });

  return (
    <div className='card country'>
      <div className='details'>
        <a
          href={`https://en.wikipedia.org/wiki/Special:Search/${countryNameUrl}`}
        >
          <h3 className='row countryName'>
            {country.name}&nbsp; ({country.alpha3Code})
          </h3>
          <h3 className='row countryName'>{country.nativeName}</h3>
          <div className='row'>
            <img
              className='flag'
              src={country.flag}
              alt={`Flag of ${country.name}`}
            />
          </div>
        </a>

        <div className='row'>
          <div className='labels'>
            <p>Capital</p>
          </div>
          <div className='data'>
            <a
              href={`https://en.wikipedia.org/wiki/Special:Search/${countryCapitalUrl}`}
            >
              <p>{country.capital}</p>
            </a>
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
              [{languages.length}] {languages.join(', ')}
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
