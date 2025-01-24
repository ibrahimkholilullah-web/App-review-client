import React from 'react';
import Navber from '../Home/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
           <div className='bg-[#FFF8F5]'>
           <div className='w-11/12 mx-auto '>
            <Navber></Navber>
            </div>
           </div>
           <div className=''>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;