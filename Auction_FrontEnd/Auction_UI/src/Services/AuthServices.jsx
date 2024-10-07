import axios from 'axios';
import { handleError } from '../handlers/ErrorHandler';

const api = 'http://localhost:5166/api/';

export const loginAPI = async (username, password) => {
  try {
    const data = await axios.post(api + 'Account/login', {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (email, username, phoneNumber, password) => {
  try {
    const data = await axios.post(api + 'Account/register', {
      email: email,
      username: username,
      phoneNumber: phoneNumber,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};