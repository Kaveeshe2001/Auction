import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email, username, phoneNumber, password) => {
    try {
      const res = await registerAPI(email, username, phoneNumber, password);
      if (res && res.data) {
        handleAuthResponse(res.data);
        toast.success('Account Created Successfully');
        navigate('/');
      }
    } catch (e) {
      toast.error(`Registration failed: ${e.message}`);
    }
  };

  const loginUser = async (username, password) => {
    try {
      const res = await loginAPI(username, password);
      if (res && res.data) {
        handleAuthResponse(res.data);
        toast.success('Login Success');
        navigate('/');
      }
    } catch (e) {
      toast.error(`Login failed: ${e.message}`);
    }
  };

  const handleAuthResponse = (data) => {
    localStorage.setItem('token', data.token);
    const userObj = {
      userName: data.userName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    localStorage.setItem('user', JSON.stringify(userObj));
    setToken(data.token);
    setUser(userObj);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  };

  const isLoggedIn = () => !!user;

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common['Authorization'];
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

export default UserProvider;