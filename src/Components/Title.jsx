import React from 'react';

function Title() {
  console.log('rendering title...');

  return <h2 className='text-3xl font-bold text-center mb-3'>useCallback Hook Tutorial</h2>;
}

export default React.memo(Title);
