import React from "react";
import { GrApps } from "react-icons/gr";
import { FaBars, FaRegUserCircle, FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <FaBars size={22} />
        <Link to="/" className="logo">
          <img
            src="https://kilosdavao.com/wp-content/uploads/2020/06/YouTube-logo-1.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="center">
        <SearchForm />
        <FaMicrophone size={22} className="icon" />
      </div>
      <div className="icons">
        <RiVideoAddLine size={22} className="icon" />
        <GrApps size={22} className="icon" />
        <IoMdNotificationsOutline size={22} className="icon" />
        <FaRegUserCircle size={22} className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
