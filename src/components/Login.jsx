import { useState } from 'react';
import Header from './Header';
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
 
const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm);
}

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          alt='bg-image'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg'
        />
      </div>
      <form className='absolute w-4/12 p-4 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4 px-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        <div className='flex flex-col p-4 align-items-center justify-center'>
          {!isSignInForm && (
            <input
              type='text'
              placeholder='Enter your Name'
              className='p-3 bg-gray-700 mb-4  w-full'
            />
          )}
          <input
            type='text'
            placeholder='Enter your email'
            className='p-3 bg-gray-700 mb-4  w-full'
          />
          <input
            type='password'
            placeholder='Passwords'
            className='p-3 mb-10 bg-gray-700 w-full'
          />
          <button className='bg-red-700  px-4 py-2 w-full'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className='text-xs py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm
              ? 'New to Netflix? Sign Up Now'
              : 'Already a user? Sign In'}
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;