import React from 'react';
import {
  Link,
} from "react-router-dom";
import './NavigationBar.css';

type NavigationBarProps = {};

export const NavigationBar = (props: NavigationBarProps) => {
  return (
    <header className="header">
      <ul className="navbar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/rsvp">RSVP</Link>
        </li>
        <li>
          <Link to="/registry">Registry</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </header>
  );
};