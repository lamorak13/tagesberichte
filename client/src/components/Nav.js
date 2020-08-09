import React from 'react';

function Nav() {
  const date = new Date();

  function getDateFromData(date) {
    const test = new Date(date);
    const day = test.getDate();
    const month = test.getMonth();
    const year = test.getFullYear();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${day}. ${monthNames[month]}, ${year}`;
  }

  return (
    <header>
      <h1>Tagesberichte</h1>
      <div className='date-container'>
        <p>{getDateFromData(date)}</p>
      </div>
    </header>
  );
}

export default Nav;
