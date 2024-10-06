import axios from 'axios';
import React, { useState } from 'react';

const RegInput = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const url = 'https://localhost:7157/api/Registration/Registration';
    const data = {
      Name: name,
      PhoneNo: phoneNo,
      Email: email,
      Password: password,
    };

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      setSuccess("Registration successful!");
      // Clear form fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNo("");
    } catch (error) {
      console.error('Error during registration:', error);
      setError(error.response?.data?.message || "An error occurred during registration. Please try again.");
    }
    
  };

  const handleLogin = () => {
    window.location.url = "/login";
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSave}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your name</label>
          <input type="text" name='Name' id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kaveeshe Waduge" required />
        </div>
        <div className="mb-5">
          <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Phone Number</label>
          <input type="text" name='PhoneNO' id="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+94 xxxxxxxxx" required />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input type="email" name='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
          <input type="password" name='PasswordHash' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
      </form>
      <div className='my-5'>
        <span className='text-gray-500 mr-2'>If you Already have an account?</span>
        <a className='text-blue-900' href='/login' onClick={(e) => handleLogin(e)}>Login</a>
      </div>
    </div>
  );
};

export default RegInput;