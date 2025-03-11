import { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";


export const CounterContext = createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state > 0 ? state - 1 : 0;

    case 'reset':
      return (state = 0);

    default:
      return state;
  }
};

const ContextWithReducer = () => {

   const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div className='border border-slate-900 p-8 rounded-md bg-rose-200 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count : {count}
        </h3>
        <CounterContext.Provider value={{countDispatch: dispatch}}>
          <ComponentA />
        </CounterContext.Provider>
      </div>
    </div>
  );
};
export default ContextWithReducer;
