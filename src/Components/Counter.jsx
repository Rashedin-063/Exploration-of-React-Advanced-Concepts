import { useReducer} from "react"



const initialState = 0;
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

const Counter = () => {
  // const [count, setCount] = useState()



  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3 className="text-3xl lg:text-4xl font-semibold text-center mb-8">Count - {count}</h3>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch('increment')}>Increment</button>
        <button className="bg-violet-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch('decrement')}>Decrement</button>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-md" onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}
export default Counter