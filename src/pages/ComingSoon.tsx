import React from 'react';
import logo from "../images/WeddingLogo.png";
import '../App.css';

type ComingSoonProps = {};

export const ComingSoon = (props: ComingSoonProps) => {
  return (
    <div className="main-container">
      <div className="comingsoon-header">     
        <img src={logo} alt="Wedding Logo" width={700}/>
        <span className="comingsoon-text light-text">are getting married</span>
        <span className="comingsoon-date">11.5.22</span>
      </div>
      <div className="comingsoon-footer">
        <span className="comingsoon-text dark-text">save the date, and check back often for more details</span>
      </div>
    </div>
  );
}