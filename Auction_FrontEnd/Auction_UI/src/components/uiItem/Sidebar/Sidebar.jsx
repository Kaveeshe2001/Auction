import React from 'react';
import { RiUserFill } from '@remixicon/react';
import logo from '../../../assets/coinlg.png';
import Search from '../Search/CustomSearch';
import { useAuthContext } from '../../../Handlers/useAuthContext';
import PrimaryButton from '../Buttons/PrimaryButton';

const Sidebar = ({ active }) => {
  const { logout, isLoggedIn } = useAuthContext();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={`fixed top-0 left-0 w-[280px] p-[30px_20px] z-[99999] h-full overflow-auto bg-white border-r border-[#eee] transform ${active ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in shadow-[0_2px_20px_rgba(0,0,0,0.03)]`}>
      <div className='text-left pt-5 flex justify-center pb-2'>
        <div className='logo-wrapper'>
          <a href=''>
            <img src={logo} alt='logo' width={130} height={100} />
          </a>
        </div>
      </div>

      <ul className='float-none text-left py-5 list-none m-0 p-0'>
        {['Home', 'Auction', 'Contact'].map((item) => (
          <li key={item} className='block relative px-[5px]'>
            <a href='' className='py-[25px] block text-[--title-color] tracking-[0.4px] font-[--font-dmsans] font-semibold text-base transition-all duration-500 ease-out relative'>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <ul className='m-0 list-none pb-5 flex-wrap float-none text-left flex'>
        {[
          { icon: 'email', text: 'info@example.com' },
          { icon: 'support', text: 'Customer support' }
        ].map((item) => (
          <li key={item.text} className='relative block px-[5px]'>
            <a href='' className='text-[--title-color] text-[15px] font-medium leading-5 flex items-center gap-2 transition-all duration-500 py-[10px]'>
              <svg className='fill-[--title-color] transition-all duration-500' width='20' height='20' viewBox='0 0 20 20'>
                {/* SVG paths here */}
              </svg>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <Search />

      {isLoggedIn() ? (
        <>
          <a href='' className='flex mt-5 justify-center items-center'>
            <RiUserFill size={15} color='#fff' />
            <span className='ml-2'>My Account</span>
          </a>
          <PrimaryButton
            text='Logout'
            variant='default'
            onClick={handleLogout}
          />
        </>
      ) : (
        <>
          <PrimaryButton text='Signup' variant='white' link='/signup' />
          <PrimaryButton text='Login' variant='default' link='/login' />
        </>
      )}
    </div>
  );
};

export default Sidebar;