import React from 'react';
import Logo from '../../../assets/coinlg.png';

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="border-t border-purple-200"></div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:py-8">
        
        {/* Flex container for logo and menu items */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Coino</span>
          </a>
          <ul className="flex flex-wrap justify-center sm:justify-end items-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Auction</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        
        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        {/* Footer copyright */}
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024 <a href="" className="hover:underline">Coino™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
