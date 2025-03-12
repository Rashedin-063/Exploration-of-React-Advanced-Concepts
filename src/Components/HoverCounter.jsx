import { useState } from "react";


const HoverCounter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onMouseOver={() => setCount(prevCount => prevCount + 1)}
        className='bg-purple-700 text-white px-4 py-2 rounded-md text-lg mt-8 font-semibold w-48'
        type='button'
      >
        Hovered {count} times
      </button>
    </div>
  )
}
export default HoverCounter