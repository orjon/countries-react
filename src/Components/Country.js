import React from 'react';

const Country = ({ country }) => {
  let countryNameUrl = country.name.replaceAll(' ', '&nbsp;');
  let countryCapitalUrl = country.capital.replaceAll(' ', '&nbsp;');
  // let area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className='card country'>
      <div className='details'>
        {/* <h3 className='row countryName'>
        <a href={`https://en.wikipedia.org/wiki/Special:Search/${countryNameUrl}>${country.name}&nbsp`}</a>
        (${country.alpha3Code})</h3>  */}

        <h3 className='row countryName'>
          <a
            href={`https://en.wikipedia.org/wiki/Special:Search/${countryNameUrl}`}
          >
            {country.name}
          </a>
          ({country.alpha3Code})
        </h3>
        <h3 className='row countryName'>{country.nativeName}</h3>
        <div className='row'>
          <img
            className='flag'
            src={country.flag}
            alt={`Flag of ${country.name}`}
          />
        </div>

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
          <div className='data'>{/* <p>{area}</p> */}</div>
        </div>

        {/* 



      <div className='row'>
        <div className='labels'>
          <p>Population</p>
        </div>
        <div className='data'>
          <p>${country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </div>
      </div>

      <div className='row'>
        <div className='labels'>
          <p>Languages</p>
        </div>
        <div className='data'>
          <p>[${languages.length}]${languages}</p>
        </div>
      </div>



      <div className='row'>
        <div className='labels'>
          <p>Currencies</p>
        </div>
        <div className='data'>
          <p>[${currencies.length}]${currencies}</p>
        </div>
      </div>

      <div className='row'>
        <div className='labels'>
          <p>Timezones</p>
        </div>
        <div className='data'>
          <p>[${timezones.length}]${timezones}</p>
        </div>
      </div>

      <div className='row'>
        <div className='labels'>
          <p>Domain</p>
        </div>
        <div className='data'>
          <p>${country.topLevelDomain}</p>
        </div>
      </div>

      <div className='row'>
        <div className='labels'>
          <p>Calling Code</p>
        </div>
        <div className='data'>
          <p>+${country.callingCodes}</p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Country;
