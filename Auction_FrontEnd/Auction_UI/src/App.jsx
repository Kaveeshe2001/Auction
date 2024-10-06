import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Providers/UserProvider';
import Navbar from './components/Main/Navbar/Navbar';
import Footer from './components/Main/Footer/Footer';

const App = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup', '/add-art'].includes(
    location.pathname
  );

  return (
    <UserProvider>
      {showNavbar && <Navbar />}
      <Outlet />
      <Footer />
      <ToastContainer />
    </UserProvider>
  );
};

export default App;