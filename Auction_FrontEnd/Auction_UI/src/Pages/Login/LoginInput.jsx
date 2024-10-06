import React, { useState } from 'react';
import { useAuthContext } from '../../Handlers/useAuthContext';
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(email.trim().toLowerCase(), password.trim());
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='flex flex-col'>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input
            type="email"
            name='Email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
          <input
            type="password"
            name='Password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </form>
      <div className='my-5 flex flex-col items-center justify-center'>
        <span className='text-gray-500'>Or</span>
        <a className='text-blue-900' href='/register' onClick={handleRegister}>Register</a>
      </div>
    </div>
  );
};

export default LoginInput;