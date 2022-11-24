import { v4 as uuid } from 'uuid';
import { wikiSearch } from '../Constants';

export const formatUrl = (string) => {
  return string.replaceAll(' ', '%20');
};

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const createLinkList = (itemsArray, urlExtension) => {
  const itemList = itemsArray.map((item, index) => {
    let url = item.replaceAll(' ', '%20') + `%20${urlExtension}`;
    let seperator = '';
    if (index + 1 !== itemsArray.length) {
      seperator = ', ';
    }
    return (
      <span key={uuid()}>
        <a href={`${wikiSearch}${url}`}>{item}</a>
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
