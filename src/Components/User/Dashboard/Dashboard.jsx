import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logoImage from "../../../assets/icons/logo.png";
import { CiCirclePlus, CiShoppingCart } from 'react-icons/ci';
import { LuListOrdered } from 'react-icons/lu';
import { GoCodeReview } from 'react-icons/go';
import { TbBrandBooking } from 'react-icons/tb';
import { IoMdPeople } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import UseRole from '../../useRole/UseRole';
import Loading from '../../Loading/Loading';

const Dashboard = () => {
    const [role, isLoading] = UseRole();
    if (isLoading) return <Loading />;

    const dashboardLink = ({ isActive }) =>
        isActive
            ? "hover:text-[#F73E7B] text-[#F73E7B] rounded-none flex items-center gap-2"
            : "hover:text-[#F73E7B] rounded-none flex items-center gap-2";

    return (
        <div className="min-h-screen">
            <div className="flex flex-col lg:flex-row min-h-screen border">
                {/* Sidebar */}
                <div className="w-full lg:w-3/12 p-5 lg:p-10 space-y-4 ">
                    <img className="w-20 lg:w-24 mb-4 mx-auto lg:mx-0" src={logoImage} alt="Logo" />
                    <ul className="text-[#878787] font-semibold space-y-3">
                        {role === "user" && (
                            <>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/book">
                                        <CiShoppingCart /> Book
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/bookingList">
                                        <TbBrandBooking /> Booking List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/reviewForm">
                                        <GoCodeReview /> Review
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {role === "admin" && (
                            <>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/orderList">
                                        <LuListOrdered /> Order List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/addservices">
                                        <CiCirclePlus /> Add Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/makeadmin">
                                        <IoMdPeople /> Make Admin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={dashboardLink} to="/dashboard/manageservice">
                                        <MdManageAccounts /> Manage Services
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-9/12 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
