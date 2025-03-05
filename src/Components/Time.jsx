import { useEffect, useRef, useState } from 'react';

export default function Time() {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef(null)

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);

    // do the cleanup - stop the timer
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <p className='text-3xl font-semibold text-blue-800'>
        Time: <span className='ml-1 text-purple-600'> {date.toLocaleTimeString()}</span>
      </p> 
      <button
        onClick={() => clearInterval(buttonRef.current)}
        className='mt-8 rounded-full border-2 border-indigo-800 px-6 py-1 text-lg font-semibold text-indigo-900 '>Cleanup</button>
    </div>
  );
}
