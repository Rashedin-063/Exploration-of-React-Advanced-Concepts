const UseRefHook = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submission')
    
  }

  return (
    <div>
      <h3 className='text-3xl lg:text-4xl font-semibold mb-8 text-center'>
        Exploration of useRef hook
      </h3>
      <form onSubmit={handleSubmit} className="border border-blue-950 rounded-md w-[400px] lg:w-[500px] p-8">
        <div className='flex flex-col space-y-1 my-4'>
          <label htmlFor='email' className='text-lg leading-relaxed'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            className='py-2 rounded-lg pl-2'
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='password' className='text-lg leading-relaxed'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='py-2 rounded-lg pl-2'
          />
        </div>
        <button
          type='submit'
          className='mt-6 bg-blue-700 w-full py-2 rounded-lg text-white hover:bg-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default UseRefHook