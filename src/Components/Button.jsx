/* eslint-disable react/prop-types */
import React from 'react';

function Button({ handleClick, children }) {
  console.log(`rendering button ${children}`);

  return (
    <div className='flex justify-center items-center'>
      <button
        className='bg-rose-400 text-white text-sm px-4 py-1 pb-2 rounded-full '
        type='button'
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
