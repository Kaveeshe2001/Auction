import React from 'react';
import Navbar from '../components/Main/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />  
    </div>
  );
};

export default Layout;
