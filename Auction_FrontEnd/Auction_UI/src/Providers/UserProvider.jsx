import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/AuthServices';
import { toast } from 'react-toastify';
import axios from 'axios';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email, username, phoneNumber, password) => {
    await registerAPI(email, username, phoneNumber, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
            phoneNumber: res?.data.phoneNumber,
          };
          localStorage.setItem('user', JSON.stringify(userObj));
          setToken(res?.data.token);
          setUser(userObj);
          toast.success('Account Created Successfully');
          navigate('/');
        }
      })
      .catch((e) => toast.warning('Server Error Occurred' + e));
  };

  const loginUser = async (username, password) => {
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
            phoneNumber: res?.data.phoneNumber,
          };
          localStorage.setItem('user', JSON.stringify(userObj));
          setToken(res?.data.token);
          setUser(userObj);
          toast.success('Login Success');
          navigate('/');
        }
      })
      .catch((e) => toast.warning('Server Error Occurred' + e));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken('');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};