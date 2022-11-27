import React from 'react';
import {
  formatUrl,
  formatNumber,
  createLinkList,
  createCurrencyList,
  createLink
} from '../Utils/index';
import CountryHeader from './CountryHeader';
import DataRow from './DataRow';

const Country = ({ country }) => {
  const countryNameUrl = formatUrl(country.name.common);

  const capital = country.capital
    ? createLink(
        country.capital[0],
        `${country.capital[0]},%20${countryNameUrl}`
      )
    : undefined;

  const population = country.population
    ? formatNumber(country.population)
    : undefined;

  const area = country.area && formatNumber(country.area) + ' sq km';

  let dialingCode = country.idd.root;

  if (country.idd.suffixes && country.idd.suffixes.length === 1) {
    dialingCode = dialingCode + country.idd.suffixes[0];
  }

  let currencyList = createCurrencyList(country.currencies);

  let languageList = country.languages
    ? createLinkList(Object.values(country.languages), 'language')
    : undefined;

  let timezoneList = country.timezones
    ? createLinkList(country.timezones, '')
    : undefined;

  let domainList = country.tld ? createLinkList(country.tld, '') : undefined;

  return (
    <div aria-label={country.name.common} className='card country'>
      <CountryHeader country={country} />
      <div className='country-details'>
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
