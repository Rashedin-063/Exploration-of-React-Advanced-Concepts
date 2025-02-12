import { useCallback, useMemo, useState } from 'react';
import Button from '../Components/Button';
import ShowCount from '../components/ShowCount';
import Title from '../components/Title';

function useCallBackUseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className='flex flex-col gap-4'>
      <Title />
      <ShowCount count={count1} title='Counter 1' />
      <span className='text-lg text-center border border-gray-900 mb-4 rounded-md w-20 p-2 mx-auto'>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <div className='border border-gray-600 my-4'></div>
      <ShowCount count={count2} title='Counter 2' />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}

export default useCallBackUseMemo;