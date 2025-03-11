import { useReducer} from "react"



const initialState = {
  counter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {counter: state.counter + 1}
    
    case 'decrement':
      return state.counter > 0 ? {counter: state.counter -1} : {counter: 0};
    
    case 'reset':
      return (state.counter = { counter: 0 });
    
    default:
      return state;
  }
}

const ComplexCounter = () => {
  // const [count, setCount] = useState()



  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
        Count - {count.counter}
      </h3>
      <div className='flex gap-4'>
        <button
          className='bg-blue-500 text-white px-4 py-1 rounded-md'
          onClick={() =>
            dispatch({
              type: 'increment',
            })
          }
        >
          Increment
        </button>
        <button
          className='bg-violet-500 text-white px-4 py-1 rounded-md'
          onClick={() =>
            dispatch({
              type: 'decrement',
            })
          }
        >
          Decrement
        </button>
        <button
          className='bg-pink-500 text-white px-4 py-1 rounded-md'
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default ComplexCounter