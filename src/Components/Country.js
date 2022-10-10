import React from 'react';
import { v4 as uuid } from 'uuid';
import noFlagImage from '../images/noFlag.png';

const Country = ({ country }) => {
  const countryNameUrl = country.name.common.replaceAll(' ', '%20');
  const capital = country.capital ? (
    <span>
      <a
        href={`https://en.wikipedia.org/wiki/Special:Search/${country.capital[0]}, ${countryNameUrl}`}
      >
        {country.capital[0]}
      </a>
    </span>
  ) : (
    'N/A'
  );

  console.log(country);

  let area = 'unavailable';

  if (country.area !== null) {
    area =
      country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'sq km';
  }

  let population = country.population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const createLinkList = (itemsArray, urlExtension) => {
    const itemList = itemsArray.map((item, index) => {
      let url = item.replaceAll(' ', '%20') + `%20${urlExtension}`;
      let seperator = '';
      if (index + 1 !== itemsArray.length) {
        seperator = ', ';
      }
      return (
        <span key={uuid()}>
          <a href={`https://en.wikipedia.org/wiki/Special:Search/${url}`}>
            {item}
          </a>
          {seperator}
        </span>
      );
    });

    return (
      <p>
        [{itemList.length}] {itemList}
      </p>
    );
  };

  let languages = [];
  country.languages && (languages = Object.values(country.languages));
  let languageList = createLinkList(languages, 'language');

  const createCurrencyList = (itemsObject) => {
    let itemsArray = [];
    for (let key in itemsObject) {
      itemsArray.push(itemsObject[key]);
    }

    let currencyList = [];
    currencyList = itemsArray.map((currency, index) => {
      const name = currency.symbol
        ? currency.symbol + ' ' + currency.name
        : currency.name;
      const url = currency.name.replaceAll(' ', '%20');
      let seperator = '';
      if (index + 1 !== itemsArray.length) {
        seperator = ', ';
      }
      return (
        <span key={uuid()}>
          <a href={`https://en.wikipedia.org/wiki/Special:Search/${url}`}>
            {name}
          </a>
          {seperator}
        </span>
      );
    });

    return (
      <p>
        [{currencyList.length}] {currencyList}
      </p>
    );
  };

  let currencyList = createCurrencyList(country.currencies);

  let timezoneList = country.timezones
    ? createLinkList(country.timezones, '')
    : 'N/A';

  let domainList = country.tld ? createLinkList(country.tld, '') : 'N/A';

  let dialingCode = country.idd.root;
  if (country.idd.suffixes && country.idd.suffixes.length == 1) {
    dialingCode = dialingCode + country.idd.suffixes[0];
  }

  const dataMap = {
    Capital: capital,
    Area: area,
    Population: population,
    Languages: languageList,
    Currencies: currencyList,
    Timezones: timezoneList,
    Domains: domainList
  };

  const dataList = [];

  for (let key in dataMap) {
    dataList.push(
      <div key={uuid()} className='row'>
        <div className='labels'>{key}</div>
        <div className='data'>{dataMap[key]}</div>
      </div>
    );
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

        {dataList}

        <div className='row'>
          <div className='labels'>
            <p>Calling Code</p>
          </div>
          <div className='data'>
            <p>{dialingCode || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
