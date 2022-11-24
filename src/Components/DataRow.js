import React from 'react';

const DataRow = ({ label, prefix = '', value = 'N/A', suffix = '' }) => {
  return (
    <div className='row'>
      <div className='labels'>{label}</div>
      <div className='data'>
        {prefix}
        {value}
        {suffix}
      </div>
    </div>
  );
};

export default DataRow;
