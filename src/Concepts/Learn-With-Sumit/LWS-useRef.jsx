import { useEffect, useRef } from 'react';
import Input from '../../Components/Input';
import ForwardedInput from '../../Components/Input';
import MuiTextfield from '../../Components/MuiTextfield';

const LWSUseRef = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const textfieldRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div>
      <h3 className='text-3xl lg:text-4xl font-semibold mb-8 text-center'>
        Exploration of useRef - LWS
      </h3>
      <form
        onSubmit={handleSubmit}
        className='border border-blue-950 rounded-md w-[400px] lg:w-[500px] p-8'
      >
        <ForwardedInput
          ref={emailRef}
          type='email'
          name='email'
          placeholder='Enter your email'
        />
        <Input
          ref={passwordRef}
          type='password'
          name='password'
          placeholder='Enter your password'
        />
        <MuiTextfield
          ref={textfieldRef}
          label='Mui Textfield'
          variant='outlined'
        />
        <button
          type='submit'
          className='mt-6 bg-blue-700 w-full py-2 rounded-lg text-white hover:bg-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default LWSUseRef;
