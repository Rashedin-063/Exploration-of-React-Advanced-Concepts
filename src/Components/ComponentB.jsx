import { useContext } from 'react';
import { CounterContext } from './ContextWithReducer';

const ComponentB = () => {
  const countContext = useContext(CounterContext);

  return (
    <div>
      <div className='flex gap-4'>
        <button
          className='bg-blue-500 text-white px-4 py-1 rounded-md'
          onClick={() => countContext.countDispatch('increment')}
        >
          Increment
        </button>
        <button
          className='bg-violet-500 text-white px-4 py-1 rounded-md'
          onClick={() => countContext.countDispatch('decrement')}
        >
          Decrement
        </button>
        <button
          className='bg-pink-500 text-white px-4 py-1 rounded-md'
          onClick={() => countContext.countDispatch('reset')}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default ComponentB;
