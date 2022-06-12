import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink
} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "Wedding", to: "/wedding" },
    { name: "RSVP", to: "/rsvp" },
    { name: "Travel", to: "/travel" },
    { name: "Registry", to: "/registry" },
    { name: "Gallery", to: "/gallery" },
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
    </div>         
  );
};