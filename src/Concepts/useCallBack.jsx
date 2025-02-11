
import { useState } from "react"
import Message from "../Components/Message";

const useCallBack = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log('hello from increment');

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-xl font-bold'>useCallBack Hook in React</h1>

      {toggle ? <p>ON</p> : <p>OFF</p>}

      <button onClick={() => setToggle(!toggle)}>
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
      <Message count={count} />
    </div>
  );
};
export default useCallBack;