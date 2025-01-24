import React from "react";
import logoImg from "../../../assets/icons/logo.png";
import { Link, NavLink } from "react-router-dom";
import userAuth from "../../AuthProvider/userAuth";
import { FaRegUserCircle } from "react-icons/fa";

const Navber = () => {
  const {user,logoOut} = userAuth()
  // Reusable function for NavLink styling
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F63E7B] border-[#F63E7B] hover:text-white hover:bg-[#F63E7B] border-b-2 rounded-none"
      : "hover:border-b-2 hover:border-red-500 rounded-none hover:bg-white";

  const pathData = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/resources" className={navLinkClass}>
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className={navLinkClass}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/company" className={navLinkClass}>
          Company
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#FFF8F5]">
    <div className="navbar py-6 ">
      {/* Logo */}
      <div className="navbar-start flex items-center">
         {/* Mobile Menu */}
         <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost text-[#F63E7B] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu space-y-2 menu-sm dropdown-content p-3 w-52 bg-white rounded-box z-[1] mt-3 shadow"
          >
            {pathData}
            {/* Sign In Button for Mobile Screens */}
            <div className="lg:hidden block">
              <Link
                to="/login"
                className="btn border-2 bg-[#F63E7B] rounded-none hover:bg-white hover:text-black hover:border border-[#F63E7B] text-white px-8"
              >
                Sign In
              </Link>
            </div>
          </ul>
        </div>
        <img className="text-black md:w-28 w-16" src={logoImg} alt="Logo" />
      </div>
      
      {/* Navbar Center */}
      
  
      {/* Navbar End */}
      <div className="navbar-end flex items-center">
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 font-bold items-center">
          {pathData}
        </ul>
      </div>
        {/* Sign In Button for Larger Screens */}
        <div className="lg:block space-x-4">
  {user ? (
    <div className=" dropdown ">
      {/* Display user photo or fallback icon */}
      {user?.photoURL ? (
        <img
          tabIndex={0}
          role="button"
          className="w-12 rounded-full p-1 border border-[#F73E7B]"
          src={user.photoURL}
          alt="User"
        />
      ) : (
        <div
          tabIndex={0}
          role="button"
          className="w-12 h-12 flex items-center justify-center rounded-full p-1 border border-[#F73E7B] bg-gray-100 text-gray-500"
        >
          <FaRegUserCircle className="w-8 h-8" />
        </div>
      )}
      
      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="dropdown-content space-y-2 text-center mx-auto menu bg-base-100 rounded-box z-[1] w-52 right-2 p-2 shadow"
      >
        <li className="mt-2 text-[#F63E7B]">
          {user?.displayName}
        </li>
        <li className="text-center">
          <NavLink to='/profile' className={`${navLinkClass} `}>Update User Profile</NavLink>
        </li>
        <li className="text-center mx-auto w-full flex justify-center">
          <NavLink to='/dashboard' className={`${navLinkClass} text-center`}>Dashboard</NavLink>
        </li>
        
        <li
          className="bg-[#F63E7B] cursor-pointer text-white px-1 rounded-xl text-center"
          onClick={logoOut}
        >
          Log Out
        </li>
      </ul>
    </div>
  ) : (
    <Link
      to="/login"
      className="btn border-2 bg-[#F63E7B] rounded-none hover:bg-white hover:text-black hover:border border-[#F63E7B] text-white px-8"
    >
      Sign In
    </Link>
  )}
</div>

  
       
      </div>
    </div>
  </div>
  
  );
};

export default Navber;
