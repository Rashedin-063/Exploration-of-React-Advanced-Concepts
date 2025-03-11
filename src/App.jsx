import { useReducer } from "react";


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

const App = () => {

   const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div className='border border-slate-900 p-8 rounded-md bg-green-400 drop-shadow-2xl'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-center mb-8'>
          Count : {count}
        </h3>
      </div>
    </div>
  );
};
export default App;
