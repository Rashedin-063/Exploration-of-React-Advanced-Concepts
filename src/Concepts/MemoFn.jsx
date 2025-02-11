import { useState } from "react"
import Message from "../Components/Message";

const MemoFn = () => {
  const [count, setCount] = useState(0)

  console.log('hello from increment')
  

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-xl font-bold'>Memo Function in React</h1>

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
      <Message/>
    </div>
  );
}
export default MemoFn