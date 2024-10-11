import React, { useState } from 'react';
import { User } from 'lucide-react';
import Logo from "../../../assets/coinlg.png";
import { useNavigate } from "react-router-dom";
import CustomSearch from "../../uiItem/Search/CustomSearch"
import Sidebar from "../../uiItem/Sidebar/Sidebar"
import PrimaryButton from "../../uiItem/Buttons/PrimaryButton"
import SecondaryButton from '../../uiItem/Buttons/SecondaryButton';

const Navbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setActiveSidebar(!activeSidebar);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  const handleSave = () => {
    navigate("/register"); 
  }

  const handleLogin = () => {
    navigate("/login"); 
  }

  return (
    <div className="w-full absolute z-50 bg-transparent border-b border-white/10 ">
      <div className="py-3 border-b border-gray-200 mx-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" className="text-white flex items-center gap-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <svg className="w-5 h-4 fill-current" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2422 0.96875H1.75781C0.786602 0.96875 0 1.76023 0 2.72656V13.2734C0 14.2455 0.792383 15.0312 1.75781 15.0312H18.2422C19.2053 15.0312 20 14.2488 20 13.2734V2.72656C20 1.76195 19.2165 0.96875 18.2422 0.96875ZM17.996 2.14062L11.243 8.85809C10.9109 9.19012 10.4695 9.37293 10 9.37293C9.53047 9.37293 9.08906 9.19008 8.75594 8.85699L2.00398 2.14062H17.996ZM1.17188 13.0349V2.96582L6.23586 8.00312L1.17188 13.0349ZM2.00473 13.8594L7.06672 8.82957L7.9284 9.68672C8.48176 10.2401 9.21746 10.5448 10 10.5448C10.7825 10.5448 11.5182 10.2401 12.0705 9.68781L12.9333 8.82957L17.9953 13.8594H2.00473ZM18.8281 13.0349L13.7641 8.00312L18.8281 2.96582V13.0349Z" />
                  </svg>
                  info@example.com
                </a>
              </li>
              <li>
                <a href="#" className="text-white flex items-center gap-2 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5956 8.7197C18.5244 6.5458 17.6262 4.48105 16.0844 2.94689C14.4584 1.32064 12.2975 0.425323 9.99999 0.425323C5.35968 0.425323 1.56812 4.11876 1.40468 8.7197C1.04688 8.87819 0.742722 9.13705 0.529067 9.46491C0.315412 9.79277 0.201428 10.1756 0.200928 10.5669V12.8363C0.201507 13.3722 0.414645 13.8859 0.793578 14.2649C1.17251 14.6438 1.68629 14.8569 2.22218 14.8575C2.5689 14.8571 2.90131 14.7192 3.14648 14.474C3.39166 14.2288 3.52958 13.8964 3.52999 13.5497V9.85314C3.52999 9.17595 3.01062 8.62376 2.3503 8.55814C2.59405 4.5497 5.93093 1.36282 9.99999 1.36282C12.0475 1.36282 13.9728 2.16095 15.4219 3.61001C16.7525 4.94064 17.5312 6.67501 17.6484 8.55845C16.9887 8.6247 16.4703 9.17657 16.4703 9.85314V13.5494C16.4703 14.2322 16.9978 14.7878 17.6659 14.8456V15.7797C17.6653 16.2855 17.4642 16.7704 17.1065 17.128C16.7488 17.4856 16.2639 17.6867 15.7581 17.6872H14.3453C14.2501 17.4095 14.0702 17.1686 13.8311 16.9983C13.5919 16.8281 13.3054 16.737 13.0119 16.7378H11.5556C11.3466 16.7378 11.1459 16.7822 10.9622 16.8678C10.7161 16.9815 10.5077 17.1632 10.3616 17.3914C10.2154 17.6196 10.1375 17.8849 10.1372 18.1559C10.1372 18.5353 10.285 18.8916 10.5528 19.1581C10.6841 19.2905 10.8403 19.3954 11.0125 19.4669C11.1846 19.5383 11.3692 19.5749 11.5556 19.5744H13.0119C13.6156 19.5744 14.1478 19.1841 14.3462 18.6247H15.7581C17.3272 18.6247 18.6034 17.3484 18.6034 15.7797V14.6788C18.9591 14.5194 19.2612 14.2606 19.4733 13.9337C19.6854 13.6067 19.7985 13.2254 19.7991 12.8356V10.5663C19.7991 9.74314 19.3034 9.03439 18.5956 8.7197ZM2.59218 9.85314V13.5494C2.59218 13.7534 2.42624 13.9197 2.22187 13.9197C1.93454 13.9194 1.65907 13.8051 1.4559 13.6019C1.25273 13.3987 1.13845 13.1233 1.13812 12.8359V10.5666C1.13845 10.2792 1.25273 10.0038 1.4559 9.80061C1.65907 9.59744 1.93454 9.48315 2.22187 9.48282C2.42624 9.48282 2.59218 9.64907 2.59218 9.85314ZM13.4822 18.2566C13.4589 18.3642 13.3995 18.4606 13.3139 18.5299C13.2284 18.5992 13.1217 18.6372 13.0116 18.6375H11.5553C11.4272 18.6375 11.3069 18.5875 11.215 18.4956C11.1703 18.4512 11.1348 18.3984 11.1107 18.3402C11.0865 18.282 11.0742 18.2196 11.0744 18.1566C11.0747 18.0292 11.1255 17.907 11.2156 17.817C11.3057 17.7269 11.4279 17.6762 11.5553 17.6759H13.0116C13.1397 17.6759 13.26 17.7256 13.3516 17.8175C13.4422 17.9078 13.4922 18.0284 13.4922 18.1566C13.4925 18.1909 13.4887 18.2253 13.4822 18.2566ZM18.8616 12.8359C18.8612 13.1233 18.7469 13.3987 18.5438 13.6019C18.3406 13.8051 18.0651 13.9194 17.7778 13.9197C17.6796 13.9196 17.5855 13.8806 17.516 13.8111C17.4466 13.7417 17.4076 13.6476 17.4075 13.5494V9.85314C17.4075 9.64907 17.5734 9.48282 17.7778 9.48282C18.0651 9.48315 18.3406 9.59744 18.5438 9.80061C18.7469 10.0038 18.8612 10.2792 18.8616 10.5666V12.8359Z" />
                  </svg>
                  Customer support
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-3">
              <li>
                 <SecondaryButton text='How to Bid' link='#' />  
              </li>
              <li>
                 <SecondaryButton text='List Item' link='#' /> 
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="flex items-center justify-between flex-nowrap mx-5">
        <div className="flex items-center justify-between gap-20">
          <div className="nav-logo">
            <a href="/home">
              <img src={Logo} alt="logo" className="w-15 h-12" />
            </a>
          </div>
          {/* Sidebar component would go here */}
          <Sidebar active={activeSidebar} />
          <nav className="hidden lg:block">
            <ul className="flex">
              <li className="px-6">
                <a href="#" className="relative font-semibold text-base py-6 block text-white transition-colors hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Home
                </a>
              </li>
              <li className="px-6">
                <a href="/productPage" className="relative font-semibold text-base py-6 block text-white transition-colors hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Auction
                </a>
              </li>
              <li className="px-6">
                <a href="/contact" className="relative font-semibold text-base py-6 block text-white transition-colors hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-8">
          <CustomSearch />
          
          <div
            className={`lg:hidden flex flex-col items-end justify-center relative cursor-pointer ${activeSidebar ? 'active' : ''}`}
            onClick={handleClick}
          >
            <span className="w-6 h-0.5 bg-white block transition-transform duration-500 ease-in-out"></span>
            <span className="w-9 h-0.5 bg-white block mt-2.5 transition-transform duration-500 ease-in-out"></span>
            <span className="w-4 h-0.5 bg-white block mt-2.5 transition-transform duration-500 ease-in-out"></span>
          </div>

          {isLoggedIn ? (
            <>
              <a href="/profile" className="hidden lg:flex items-center gap-1 text-white bg-green-600 border-b border-green-500 rounded px-5 py-3 overflow-hidden relative z-10 group">
                <User size={15} />
                <span className="font-normal">My Account</span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></span>
              </a>
              <button
                onClick={handleLogout}
                className="hidden lg:inline-block text-white bg-green-500 hover:bg-green-600 transition-colors font-semibold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className='flex gap-2'>
                <PrimaryButton text='Signup' variant='secondary' href='/register' onClick={(e) => handleSave(e)} />
                <PrimaryButton text='Login' variant='secondary' href='/login' onClick={(e) => handleLogin(e)}/>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;