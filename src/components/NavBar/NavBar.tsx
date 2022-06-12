import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink
} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "RSVP", to: "/rsvp" },
    { name: "Registry", to: "/registry" },
    { name: "Gallery", to: "/gallery" },
    { name: "Travel", to: "/travel" },
  ];

  return (
    <div className="header">
      <div className="navLinks">
          {navLinks.map((link, i) => (
            <NavLink
              to={link.to}
              className={({isActive}) => isActive ? "home" : ""}
              key={i}
            >
              {link.name}
            </NavLink>
          ))}
      </div> 
      <div className="navLogo">
        <Link to="/">
          <img
            className="logoImg"
            src={require("../../images/WeddingLogo.png")}
            alt="logo"
          />  
        </Link>
      </div>                           
    </div>         
  );
};