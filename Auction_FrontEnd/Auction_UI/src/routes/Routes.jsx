import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Register/Registration';
import ProtectedRoute from './ProtectedRoute';
import Contact from '../Pages/Contact/Contact';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import Productpage from '../Pages/ProductPage/Productpage';
import Profile from '../Pages/Profile/Profile';
import AddCoin from '../Pages/Profile/page/AddItems/AddCoin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Registration /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      { path: 'addCoin', element: <AddCoin />},
      { path: 'contact', element: <Contact /> },
      { path: 'productpage', element: <Productpage /> },
      { path: 'productDetails/:id', element: <ProductDetails /> },
    ],
  },
]);