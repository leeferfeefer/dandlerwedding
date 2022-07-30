import React from "react";
import "./HamburgerMenu.css";
import { navLinks } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

type HamburgerMenuProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const HamburgerMenu = (props: HamburgerMenuProps) => {

  let opacityClasses = ["hamburger-menu-container"];
  if (props.isOpen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }


  return (
    <div className={opacityClasses.join(" ")} onClick={props.toggle}
    >
      <div className="hamburger-menu">
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
  )
};