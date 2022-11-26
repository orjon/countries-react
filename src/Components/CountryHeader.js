import React from 'react';
import noFlagImage from '../images/noFlag.png';
import { wikiSearch } from '../Constants';
import { formatUrl } from '../Utils/index';

const CounrtryHeader = ({ country }) => {
  const countryNameUrl = formatUrl(country.name.common);
  const fallbackFlag = (e) => {
    if (e.target.src !== noFlagImage) {
      e.target.onerror = null;
      e.target.src = noFlagImage;
    }
  };

  return (
    <div>
      <a href={`${wikiSearch}${countryNameUrl}`}>
        <h2 className='row countryName'>
          {country.name.common}&nbsp;({country.cca3})
        </h2>
        <div className='row countryNameOfficial'>{country.name.official}</div>
      </a>
      <div className='row'>
        <a href={`${wikiSearch}${countryNameUrl}`}>
          <img
            className='flag'
            src={country.flags.svg}
            onError={(e) => fallbackFlag(e)}
            alt={`Flag of ${country.name.common}`}
          />
        </a>
      </div>
    </div>
  );
};

export default CounrtryHeader;
