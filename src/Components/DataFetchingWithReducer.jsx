import { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {...state, loading: false, error: 'There was a problem fetching data' };
    case 'SUCCESS':
      return {...state, loading: false, post: action.payload };
    default:
      return state;
  }
}

const DataFetchingWithReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/post/1')
        .then((response) => response.json())
        .then((data) => {
         dispatch({ type: 'SUCCESS', payload: data });
        })
        .catch(() => {
         dispatch({ type: 'ERROR' });
        });
    }, []);
  
  
  return (
    <div>
      {state.loading ? 'Loading...' : state.post.title}
      {state.error ? state.error : <p className='text-red-600 text-lg font-semibold'>Error fetching data</p>}
    </div>
  );
};
export default DataFetchingWithReducer;
