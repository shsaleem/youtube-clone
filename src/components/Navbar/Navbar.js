import React from "react";
import { GrApps } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../assests/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} />
        <h3>Youtube</h3>
      </Link>

      <SearchForm />
      <div className="icons">
        <GrApps className="icon" />
        <FaRegUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
