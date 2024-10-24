import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Providers/UserProvider';
import Navbar from './components/Main/Navbar/Navbar';
import Footer from './components/Main/Footer/Footer';

const App = () => {
  const location = useLocation();
  
  // Check if the current path starts with any of these routes
  const hideNavbarAndFooter = location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/register') ||
    location.pathname.startsWith('/profile') ||
    location.pathname.startsWith('/coinItems') ||
    location.pathname.startsWith('/addCoin');

  return (
    <UserProvider>
      <div>
        {!hideNavbarAndFooter && <Navbar />}
        <ToastContainer />
        <Outlet />
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </UserProvider>
  );
};

export default App;