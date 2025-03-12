import { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className='bg-purple-700 text-white px-4 py-2 rounded-md text-lg mt-8 font-semibold w-48'
        type='button'
      >
        Clicked {count} times
      </button>
    </div>
  );
};
export default ClickCounter;
