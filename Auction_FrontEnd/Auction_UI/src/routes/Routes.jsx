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
import AddProducts from '../SellerDashboard/Page/Products/AddProducts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Registration /> },
      {
        path: 'addProduct',
        element: (
          <ProtectedRoute>
            <AddProducts />
          </ProtectedRoute>
        ),
      },
      { path: 'contact', element: <Contact /> },
      { path: 'productpage', element: <Productpage /> },
      { path: 'productDetails/:id', element: <ProductDetails /> },
    ],
  },
]);