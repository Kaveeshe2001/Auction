import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Providers/UserProvider';
import Navbar from './components/Main/Navbar/Navbar';
import Footer from './components/Main/Footer/Footer';

const App = () => {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/register', '/profile'].includes(location.pathname);

  return (
    <UserProvider>
      {!hideNavbarAndFooter && <Navbar />}
      <Outlet />
      {!hideNavbarAndFooter && <Footer />}
      <ToastContainer />
    </UserProvider>
  );
};

export default App;