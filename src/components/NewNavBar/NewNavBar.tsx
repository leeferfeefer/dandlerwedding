import React from "react";
import "./NewNavBar.css";
import HamburgerSrc from "../../images/HamburgerMenu.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

type NewNavBarProps = {
  toggle: () => void;
}

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Wedding", to: "/wedding" },
  { name: "RSVP", to: "/rsvp" },
  { name: "Travel", to: "/travel" },
  { name: "Registry", to: "/registry" },
  { name: "Gallery", to: "/gallery" },
];

export const NewNavBar = (props: NewNavBarProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <nav style={{height: isMobile ? "44px" : undefined}}>
      <div className="menu-items">
        {navLinks.map((link, index) => (
          <NavLink
            to={link.to}
            className="link"
            key={index}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="icons">
        <div className="mobile-menu-icon">
          <img src={HamburgerSrc} onClick={props.toggle} />
        </div>
      </div>
    </nav>
  );
};
