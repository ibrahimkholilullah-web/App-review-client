import React from 'react';
import userAuth from '../AuthProvider/userAuth';
import Loading from '../Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatedRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} =  userAuth()
    if(loading) return <Loading></Loading>
    if(user) return children
    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default PrivatedRouter;