import React from "react";
import {
  NavLink
} from "react-router-dom";
import "./NavBar.css";
import { useMediaQuery } from 'react-responsive';

export const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Wedding", to: "/wedding" },
    { name: "RSVP", to: "/rsvp" },
    { name: "Travel", to: "/travel" },
    { name: "Registry", to: "/registry" },
    { name: "Gallery", to: "/gallery" },
  ];

  return (
    <div className="header" style={{height: isMobile ? "44px" : undefined}}>
      <div className="navLinks" style={{width: isMobile ? "100%" : undefined}}>
        {navLinks.map((link, i) => (
          <NavLink
            to={link.to}
            className={({isActive}) => isActive ? "selected" : "not-selected"}
            key={i}
          >
            {link.name}
          </NavLink>
        ))}
      </div>    
    </div>         
  );
};