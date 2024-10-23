import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const Layout = () => {
    return (
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <div className='flex-1 p-4 overflow-auto'>
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default Layout