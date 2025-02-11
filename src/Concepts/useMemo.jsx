
import { useCallback, useState } from "react"
import Message from "../Components/Message";

const useMemo = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log('hello from increment');

  const handleMessageIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-2xl font-bold'>useMemo Hook in React</h1>

      <p className='text-xl font-semibold text-center'>
        {toggle ? 'ON' : 'OFF'}
      </p>

      <button
        className='bg-amber-800 text-white text-sm px-4 py-1 pb-2 rounded-full'
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>

      <h4 className='text-lg font-semibold text-center text-red-400'>
        Count: {count}
      </h4>

      <div className='flex gap-4'>
        <button
          className='bg-rose-400 text-white text-sm px-4 py-1 pb-2 rounded-full'
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment
        </button>
        <button
          className='bg-rose-400 text-white text-sm px-4 py-1 pb-2 rounded-full'
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          Decrement
        </button>
      </div>
      <Message count={count}
        handleMessageIncrement={handleMessageIncrement} />
    </div>
  );
};
export default useMemo;