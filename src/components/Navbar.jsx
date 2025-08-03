import React, { useState } from "react";
import { FaCarBurst } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
         
    <div className="fixed top-0 left-0 right-0 bg-white z-20 h-[65px] flex items-center justify-between py-3 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-b border-mainColor ">
      <div
        onClick={() => navigate("/")}
        className="flex items-center justify-center gap-2 text-mainColor cursor-pointer"
      >
        <p>
          <FaCarBurst className="text-3xl" />
        </p>
        <h1 className="font-styleFont text-4xl font-[1000]">DriveXchange</h1>
      </div>
      {/* NavLinks */}
      <ul className="hidden md:flex items-center gap-8">
        <li
          className={`group relative cursor-pointer text-mainColor/80 hover:text-mainColor transition-all duration-300 ${
            path.pathname === "/" ? "text-mainColor font-semibold" : ""
          }`}
        >
          <Link to="/">Home</Link>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-mainColor origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
              path.pathname === "/" ? "scale-x-100" : ""
            }`}
          ></span>
        </li>

        <li
          className={`group relative cursor-pointer text-mainColor/80 hover:text-mainColor transition-all duration-300 ${
            path.pathname === "/all-cars" ? "text-mainColor font-semibold" : ""
          }`}
        >
          <Link to="/all-cars">Cars</Link>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-mainColor origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
              path.pathname === "/all-cars" ? "scale-x-100" : ""
            }`}
          ></span>
        </li>

        <li
          className={`group relative cursor-pointer text-mainColor/80 hover:text-mainColor transition-all duration-300 ${
            path.pathname === "/user-bookings"
              ? "text-mainColor font-semibold"
              : ""
          }`}
        >
          <Link to="/user-bookings">My Bookings</Link>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-mainColor origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
              path.pathname === "/user-bookings" ? "scale-x-100" : ""
            }`}
          ></span>
        </li>

        <li
          className={`group relative cursor-pointer text-mainColor/80 hover:text-mainColor transition-all duration-300 ${
            path.pathname === "/admin" ? "text-mainColor font-semibold" : ""
          }`}
        >
          <Link to="/admin">View Dashboard</Link>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-mainColor origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${
              path.pathname === "/admin" ? "scale-x-100" : ""
            }`}
          ></span>
        </li>
      </ul>

      <button
        onClick={() => navigate("/create-account")}
        className="hidden md:block py-2 px-8 bg-mainColor text-white text-sm rounded-full cursor-pointer hover:bg-mainColor/80 duration-300 transition-all "
      >
        Create Account
      </button>

      <button
        onClick={menuHandler}
        className="block md:hidden relative w-6 h-6"
      >
        {/* Top bar */}
        <span
          className={`absolute left-0 top-1 w-6 h-[2px] bg-mainColor rounded-full transform transition-all duration-300 ease-in-out ${
            showMenu ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>

        {/* Middle bar */}
        <span
          className={`absolute left-0 top-3 w-6 h-[2px] bg-mainColor rounded-full transition-all duration-300 ease-in-out ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Bottom bar */}
        <span
          className={`absolute left-0 top-5 w-6 h-[2px] bg-mainColor rounded-full transform transition-all duration-300 ease-in-out ${
            showMenu ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

    

       

    </div>
      {/* Mobile Menu */}
      {showMenu && (
            <div className="fixed bottom-0   bg-white h-[calc(100vh-65px)] w-full px-8 ">
      <ul className="flex flex-col items-center mt-28 text-mainColor  text-center gap-4" >
        <li onClick={menuHandler} className={`${path.pathname === '/' ? "border border-mainColor/20 bg-mainColor/15" : "" } py-2 rounded-md w-full`}>
            <Link to={'/'} className="text-xl font-semibold">
            Home
            </Link>
        </li>
     
        <li  onClick={menuHandler} className={`${path.pathname === '/all-cars' ? "border border-mainColor/20 bg-mainColor/15" : "" } py-2 rounded-md w-full`}>
            <Link to={'/all-cars'} className="text-xl font-semibold">
            Cars
            </Link>
        </li>
        <li  onClick={menuHandler} className={`${path.pathname === '/user-bookings' ? "border border-mainColor/20 bg-mainColor/15" : "" } py-2 rounded-md w-full`}>
            <Link to={'/user-bookings'} className="text-xl font-semibold">
            My Bookings
            </Link>
        </li>
        <li  onClick={menuHandler} className={`${path.pathname === '/admin' ? "border border-mainColor/20 bg-mainColor/15" : "" } py-2 rounded-md w-full`}>
            <Link to={'/admin'} className="text-xl font-semibold">
            View Dashboard
            </Link>
        </li>
      </ul>
      <button className="mt-8 bg-mainColor text-white font-medium w-full py-3 rounded-md  hover:bg-mainColor/80 duration-300 transition-all" onClick={() => {navigate('/create-account'); menuHandler()}} >
        Create Account
      </button>
            </div>
        )}
    </div>
  );
};

export default Navbar;
