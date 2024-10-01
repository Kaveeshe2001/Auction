import React from 'react';
import Navbar from '../components/Main/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Main/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />  
      <Footer />
    </div>
  );
};

export default Layout;
