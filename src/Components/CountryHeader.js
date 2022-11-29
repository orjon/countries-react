import React from 'react';
import noFlagImage from '../images/noFlag.png';
import { wikiSearch } from '../Constants';
import { formatUrl } from '../Utils/index';

const CountryHeader = ({ country }) => {
  const wikiLink = wikiSearch + formatUrl(country.name.common);
  const fallbackFlag = (e) => {
    if (e.target.src !== noFlagImage) {
      e.target.onerror = null;
      e.target.src = noFlagImage;
    }
  };

  return (
    <div className='country-header'>
      <h2 className='row countryName'>
        <a href={wikiLink}>
          {country.name.common} ({country.cca3})
        </a>
      </h2>
      <div className='row countryNameOfficial'>
        <a href={wikiLink}>{country.name.official}</a>
      </div>

      <div className='row'>
        <div className='flagWrapper'>
          <img
            className='flag'
            src={country.flags.svg}
            onError={(e) => fallbackFlag(e)}
            alt={`Flag of ${country.name.common}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryHeader;
