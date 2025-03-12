import useCounter from './useCounter';

const ClickCounter2 = () => {
  const {count, incrementCount} = useCounter()
  return (
    <div>
      <button
        onClick={incrementCount}
        className='bg-purple-700 text-white px-4 py-2 rounded-md text-lg mt-8 font-semibold w-48'
        type='button'
      >
        Clicked {count} times
      </button>
    </div>
  );
};
export default ClickCounter2;