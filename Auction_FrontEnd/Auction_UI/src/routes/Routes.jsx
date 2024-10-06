import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Register/Registration';
import ProtectedRoute from './ProtectedRoute';
import AddArt from '../Pages/AddArt/AddArt'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Registration /> },
      {
        path: 'add-art',
        element: (
          <ProtectedRoute>
            <AddArt />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);