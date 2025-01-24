import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logoImage from "../../../assets/icons/logo.png"
import bookingList from "../../../assets/icons/Group 1360.png"
import bookingLists from "../../../assets/icons/Group 1368.png"
import { CiShoppingCart } from 'react-icons/ci';
const Dashboard = () => {
    const dashboardLink = ({ isActive }) =>
        isActive
          ? "hover:text-[#F73E7B] text-[#F73E7B]  rounded-none flex items-center gap-2"
          : "hover:text-[#F73E7B]  rounded-none flex items-center gap-2";
    return (
        <div className='min-h-screen'>
            <div className='flex  min-h-screen border'>
                <div  className='w-3/12 p-10 *:space-y-1'
                > 
                <img className='w-24 mb-4' src={logoImage} alt="" />
                 <ul className='text-[#878787] font-semibold'>
                    <li>
                    <NavLink className={dashboardLink} to='/dashboard/book'> <CiShoppingCart />Book</NavLink></li>
                    <li><NavLink  to='/dashboard/bookingList' className={dashboardLink}> <img className='w-4' src={bookingList} alt="" />Booking list</NavLink></li>
                    <li ><NavLink to='/dashboard/reviewForm' className={dashboardLink}><img className='w-4' src={bookingLists} alt="" /> Review</NavLink></li>
                    {/* Admin */}
                    <li ><NavLink to='/dashboard/orderList' className={dashboardLink}><img className='w-4' src={bookingLists} alt="" /> Order list</NavLink></li>
                    <li ><NavLink to='/dashboard/reviewForm' className={dashboardLink}><img className='w-4' src={bookingLists} alt="" /> Add service</NavLink></li>
                    <li ><NavLink to='/dashboard/reviewForm' className={dashboardLink}><img className='w-4' src={bookingLists} alt="" /> Make Admin</NavLink></li>
                    <li ><NavLink to='/dashboard/reviewForm' className={dashboardLink}><img className='w-4' src={bookingLists} alt="" /> Manage Services</NavLink></li>
                </ul>
                </div>
               
                <div className='grid-cols-9 w-9/12'>
                    <Outlet></Outlet>
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;