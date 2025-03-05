/* eslint-disable react/prop-types */

import { forwardRef } from "react";


function Input ({type, placeholder, name }, ref) {
  return (
      <div className='flex flex-col space-y-1 my-4'>
        <label htmlFor={type} className='text-lg leading-relaxed'>
          Email
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className='py-2 rounded-lg pl-2'
          ref={ref}
        />
      </div>
  );
}

const ForwardedInput = forwardRef(Input);


export default ForwardedInput;