import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const userAuth = () => {
    const authUser = useContext(AuthContext)
    return authUser
};

export default userAuth;