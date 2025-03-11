import { useReducer, useState } from "react"



const initialState = 0;
const reducer = (state, action) => {

}

const Counter = () => {
  // const [count, setCount] = useState()



  const [] = useReducer(reducer, initialState)

  return (
    <div>
      <h3 className="text-3xl lg:text-4xl font-semibold text-center mb-8">Count - 0</h3>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="bg-violet-500 text-white px-4 py-1 rounded-md" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-md" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}
export default Counter