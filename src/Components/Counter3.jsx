import { useReducer} from "react"



const initialState = 0;
const initialState2 = 5;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    
    case 'decrement':
      return state > 0 ? state -1 : 0;
    
    case 'reset':
      return state = 0;
    
    default:
      return state;
  }
}

const Counter3 = () => {
  // const [count, setCount] = useState()

2

  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState2)

  return (
    <div>
      {/* counter 1 */}
      <div className=' border border-slate-900 p-8 rounded-md bg-sky-300 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count - {count}
        </h3>
        <div className='flex gap-4'>
          <button
            className='bg-blue-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch('increment')}
          >
            Increment
          </button>
          <button
            className='bg-violet-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch('decrement')}
          >
            Decrement
          </button>
          <button
            className='bg-pink-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch('reset')}
          >
            Reset
          </button>
        </div>
      </div>


      {/* counter 2 */}
      <div className='mt-8 border border-slate-900 p-8 rounded-md bg-emerald-200 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count2 - {count2}
        </h3>
        <div className='flex gap-4'>
          <button
            className='bg-blue-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch2('increment')}
          >
            Increment
          </button>
          <button
            className='bg-violet-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch2('decrement')}
          >
            Decrement
          </button>
          <button
            className='bg-pink-500 text-white px-4 py-1 rounded-md'
            onClick={() => dispatch2('reset')}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter3