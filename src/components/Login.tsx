import React from 'react';
import { LockClosedIcon, MailIcon } from '@heroicons/react/solid';
import GoogleIcon from '../assets/Google.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import GithubIcon from '../assets/Github.svg';

const Login = () => {
  return (
    <div className='w-screen max-w-md border-0 md:border md:border-gray-200 mx-auto p-4'>
      <h1 className='text-lg font-semibold leading-6 mb-3'>Join thousand of learners from around the world</h1>
      <p className='leading-5 mb-8'>
        Master web development by making real-life projects. There are multiple paths for you to choose.
      </p>

      <form>
        <div className='border-2 border-gray-300 flex items-center p-2 space-x-2 rounded-lg mb-4'>
          <MailIcon className='w-6 text-gray-500' />
          <input type='text' placeholder='Email' className='outline-none' />
        </div>
        <div className='border-2 border-gray-300 flex items-center p-2 space-x-2 rounded-lg mb-4'>
          <LockClosedIcon className='w-6 text-gray-500' />
          <input type='text' placeholder='Email' className='outline-none' />
        </div>
        <button className='w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-400 transition duration-300 mt-2 mb-10'>
          Start coding now
        </button>
      </form>
      <p className='text-center text-sm text-gray-600'>or continue with these social profile</p>
      <div className='flex justify-center space-x-4 py-6'>
        <button className='hover:-translate-y-1 transition duration-150'>
          <img src={GoogleIcon} alt='' />
        </button>
        <button className='hover:-translate-y-1 transition duration-150'>
          <img src={FacebookIcon} alt='' />
        </button>
        <button className='hover:-translate-y-1 transition duration-150'>
          <img src={TwitterIcon} alt='' />
        </button>
        <button className='hover:-translate-y-1 transition duration-150'>
          <img src={GithubIcon} alt='' />
        </button>
      </div>
      <p className='text-center text-sm text-gray-600'>
        Already a member? <a href='/'>Login</a>
      </p>
    </div>
  );
};

export default Login;
