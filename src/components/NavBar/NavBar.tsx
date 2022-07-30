import React from "react";
import {
  NavLink
} from "react-router-dom";
import "./NavBar.css";
import { useMediaQuery } from 'react-responsive';
import HamburgerSrc from "../../images/HamburgerMenu.png";
import { Button } from "../Button/Button";

type NavBarProps = {
  onHamburgerClick: () => void;
};

export const NavBar = (props: NavBarProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
      {isMobile ? (
        <div className="hamburger-menu-container">
          {/* <img src={HamburgerSrc} onClick={} style={{padding: "5px"}}/> */}
          <Button onClick={props.onHamburgerClick} imgSrc={HamburgerSrc}/>
        </div>
      ) : (
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
      )}  
    </div>         
  );
};