import { useState } from "react";
import useCounter from "./useCounter";


const HoverCounter2 = () => {
  const {count, incrementCount} = useCounter(0);
  return (
    <div>
      <button
        onMouseOver={incrementCount}
        className='bg-purple-700 text-white px-4 py-2 rounded-md text-lg mt-8 font-semibold w-48'
        type='button'
      >
        Hovered {count} times
      </button>
    </div>
  )
}
export default HoverCounter2