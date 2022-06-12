import React from 'react';
import LogoSrc from "../../images/WeddingLogo.png";
import '../../App.css';
import "./ComingSoon.css";

type ComingSoonProps = {};

export const ComingSoon = (props: ComingSoonProps) => {
  return (
    <div className="container">
      <div className="comingsoon-header">     
        <img src={LogoSrc} alt="Wedding Logo" width={700}/>
        <div className="comingsoon-text light-text">are getting married</div>
        <div className="comingsoon-date">11.5.22</div>
      </div>
      <div className="comingsoon-footer">
        <div className="comingsoon-text dark-text">save the date, and check back often for more details</div>
      </div>
    </div>    
  );
}