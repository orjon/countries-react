import React from 'react';
import { v4 as uuid } from 'uuid';
import { wikiSearch } from '../Constants';
import { formatUrl, formatNumber, createLinkList } from '../Utils/index';
import CountryHeader from './CountryHeader';
import DataRow from './DataRow';

const Country = ({ country }) => {
  const countryNameUrl = formatUrl(country.name.common);

  const capital = country.capital ? (
    <a href={`${wikiSearch}${country.capital[0]}, ${countryNameUrl}`}>
      {country.capital[0]}
    </a>
  ) : undefined;

  const population = formatNumber(country.population);
  const area = country.area && formatNumber(country.area) + ' sq km';

  let dialingCode = country.idd.root;

  if (country.idd.suffixes && country.idd.suffixes.length === 1) {
    dialingCode = dialingCode + country.idd.suffixes[0];
  }

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
          <a href={`${wikiSearch}${url}`}>{name}</a>
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

  let languageList = country.languages
    ? createLinkList(Object.values(country.languages), 'language')
    : 'N/A';

  let timezoneList = country.timezones
    ? createLinkList(country.timezones, '')
    : 'N/A';

  let domainList = country.tld ? createLinkList(country.tld, '') : 'N/A';

  return (
    <div aria-label={country.name.common} className='card country'>
      <CountryHeader country={country} />
      <div className='details'>
        <DataRow label='Capital' value={capital} />
        <DataRow label='Population' value={population} />
        <DataRow label='Area' value={area} />
        <DataRow label='Currencies' value={currencyList} />
        <DataRow label='Languages' value={languageList} />
        <DataRow label='Domains' value={domainList} />
        <DataRow label='Time zones' value={timezoneList} />
        <DataRow label='Calling Code' value={dialingCode} />
      </div>
    </div>
  );
};

export default Country;
