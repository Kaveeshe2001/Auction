import axios from 'axios';
import React, { useState } from 'react'

const LoginInput = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  const url = 'https://localhost:7157/api/Registration/Login';

  const data = {
    Email: email.trim().toLowerCase(), // Ensure lowercase email (if required by API)
    Password: password.trim(), // Remove whitespace from password (if necessary)
  };

  try {
    const response = await axios.post(url, data);
    alert(response.data.statusMessage);
    setSuccess("Login successful!");
    setEmail("");
    setPassword("");
  } catch (error) {
    console.error('Login error:', error.response?.data?.errors);
    setError(error.response?.data?.message || "An error occurred during login. Please try again.");
  }
};

  const handleSave = () => {
    window.location.url = "/register";
  }

    return (
        <div>
         <form onSubmit={handleLogin} action='#' className='flex flex-col' >
             <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                <input type="email" name='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
             </div>
             <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
                <input type="password" name='Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" name='Remember' type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700">Remember me</label>
             </div>
             <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>      
         </form>
         <div className='my-5 flex flex-col items-center justify-center'>
           <span className='text-gray-500'>Or</span>
           <a className='text-blue-900' href='/register' onClick={(e) => handleSave(e)}>Register</a>
        </div>
        </div> 
    );
}

export default LoginInput
