import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { links, navLinks } from "./linksData";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = (navLink) => {
    setActiveLink(navLink);
  };

  return (
    <div className="sidebar">
      <div className="nav">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              key={id}
              to={url}
              className={`nav-link ${activeLink === text && "active"}`}
              onClick={() => handleClick(text)}
            >
              {icon}
              <p>{text}</p>
            </Link>
          );
        })}
        <hr />
        {navLinks.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              key={id}
              to={url}
              className={`nav-link ${activeLink === text ? "active" : ""}`}
              onClick={() => handleClick(text)}
            >
              {icon}
              <p>{text}</p>
            </Link>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
