import axios from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;
    
    if (err?.data.errors && Array.isArray(err.data.errors)) {
      err.data.errors.forEach(val => {
        toast.warning(val.description);
      });
    } else if (err?.data.errors && typeof err.data.errors === 'object') {
      Object.values(err.data.errors).forEach(errorArray => {
        if (Array.isArray(errorArray)) {
          toast.warning(errorArray[0]);
        }
      });
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status === 401) {
      toast.warning('Please Login');
      window.history.pushState({}, 'Login', '/login');
    } else if (err) {
      toast.warning(String(err.data));
    }
  } else {
    // Handle non-Axios errors
    toast.error('An unexpected error occurred');
  }
};

export default handleError;