import React from 'react';
import { UserContext } from '../Providers/UserProvider';

export const useAuthContext = () => React.useContext(UserContext);