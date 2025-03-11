import { useReducer} from "react"



const initialState = {
  counter: 0,
  counter2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.value };

    case 'decrement':
      return state.counter > 0
        ? { ...state, counter: state.counter - action.value }
        : { counter: 0 };

    case 'reset':
      return (state.counter = { ...state, counter: 0 });

    case 'increment2':
      return { ...state, counter2: state.counter2 + action.value };

    case 'decrement2':
      return state.counter2 > 5
        ? { ...state, counter2: state.counter2 - action.value }
        : { counter: 5 };

    case 'reset2':
      return (state.counter2 = { ...state, counter2: 0 });

    default:
      return state;
  }
}

const ComplexCounter = () => {
  // const [count, setCount] = useState()



  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {/* first counter */}
      <div className=' border border-slate-900 p-8 rounded-md bg-rose-200 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count - {count.counter}
        </h3>
        <div className='flex gap-4'>
          <button
            className='bg-blue-500 text-white px-4 py-1 rounded-md'
            onClick={() =>
              dispatch({
                type: 'increment',
                value: 1,
              })
            }
          >
            Increment by 1
          </button>

          <button
            className='bg-violet-500 text-white px-4 py-1 rounded-md'
            onClick={() =>
              dispatch({
                type: 'decrement',
                value: 1,
              })
            }
          >
            Decrement by 1
          </button>
          <button
            className='bg-pink-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </button>
        </div>
      </div>
      {/* second counter */}
      <div className='mt-8 border border-slate-900 p-8 rounded-md bg-indigo-200 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count - {count.counter2}
        </h3>
        <div className='flex gap-4'>
          <button
            className='bg-blue-500 text-white px-4 py-1 rounded-md'
            onClick={() =>
              dispatch({
                type: 'increment2',
                value: 2,
              })
            }
          >
            Increment by 2
          </button>

          <button
            className='bg-violet-500 text-white px-4 py-1 rounded-md'
            onClick={() =>
              dispatch({
                type: 'decrement2',
                value: 2,
              })
            }
          >
            Decrement by 2
          </button>
          <button
            className='bg-pink-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch({ type: 'reset2' })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default ComplexCounter