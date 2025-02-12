/* eslint-disable react/prop-types */
import React from 'react';

function ShowCount({ count, title }) {
  console.log(`rendering ${title}....`);

  return (
    <p className='text-xl font-semibold text-center'>
      {title} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
