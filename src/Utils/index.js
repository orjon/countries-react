import { v4 as uuid } from 'uuid';
import { wikiSearch } from '../Constants';

export const arraySort = (arrayToSort, sortKey) => {
  return arrayToSort.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
};

export const formatUrl = (string, urlExtension) => {
  let url = '';
  if (urlExtension) {
    url = `%20${urlExtension}`;
  }
  return string.replaceAll(' ', '%20') + url;
};

export const createLink = (item, link) => {
  return <a href={`${wikiSearch}${link}`}>{item}</a>;
};

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const createLinkList = (itemsArray, urlExtension) => {
  const itemList = itemsArray.map((item, index) => {
    let url = formatUrl(item, urlExtension);

    let seperator = '';
    if (index + 1 !== itemsArray.length) {
      seperator = ', ';
    }

    const itemLink = createLink(item, url);
    return (
      <span key={uuid()}>
        {itemLink}
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

export const createCurrencyList = (currencies) => {
  let itemsArray = [];
  for (let key in currencies) {
    itemsArray.push(currencies[key]);
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

    const itemLink = createLink(name, url);
    return (
      <span key={uuid()}>
        {itemLink}
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
