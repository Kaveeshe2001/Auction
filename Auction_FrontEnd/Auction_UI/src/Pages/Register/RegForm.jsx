import React from 'react';
import loginBg from '../../assets/l-bg.jpg';
import RegInput from './RegInput';

const RegForm = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row rounded-2xl shadow-lg max-w-3xl p-5 mx-auto">
      {/* Image - hidden on mobile, visible on md screens and above */}
      <div className="hidden md:block md:w-1/2">
        <img
          className="rounded-2xl h-[650px] w-[350px] object-cover"
          src={loginBg}
          alt="Register background"
        />
      </div>
      
      <div className="flex flex-col w-full md:w-1/2 md:ml-5">
        {/* Form */}
        <div className="px-4 md:px-16 mb-5 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Register</h2>
          <p className="message"></p>
          <p className="text-sm mt-4 text-center">If you want to join us, you can register here</p>
        </div>
        <RegInput />
      </div>
    </div>
  );
};

export default RegForm;