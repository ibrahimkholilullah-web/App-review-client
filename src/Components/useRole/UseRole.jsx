import { useQuery } from '@tanstack/react-query';
import React from 'react';
import userAuth from '../AuthProvider/userAuth';
import axios from 'axios';

const UseRole = () => {
    const {user,loading} = userAuth()
    const {data : role, isLoading} = useQuery({
        queryKey:["role", user?.email],
        queryFn: async () =>{
            const {data} = await axios.get(`${import.meta.env.VITE_SERVER_API}/user/${user?.email}`)
            return data.role
        }
        
    })
    return [role, isLoading]
};

export default UseRole;