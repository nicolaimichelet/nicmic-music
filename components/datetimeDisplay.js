import React from 'react';

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'text-white'}>
      <p className='mr-4 text-2xl'>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
