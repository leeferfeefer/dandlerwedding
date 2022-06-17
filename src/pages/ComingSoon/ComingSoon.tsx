import React from 'react';
import LogoSrc from "../../images/WeddingLogo.png";
import '../../App.css';
import "./ComingSoon.css";
import { useMediaQuery } from 'react-responsive';

type ComingSoonProps = {};

export const ComingSoon = (props: ComingSoonProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const emojis = "🚧 👷‍♀️ 🚨 👷‍♂️ 🚧";

  return (
    <div className="comingsoon-container" style={{marginTop: isMobile ? "44px" : undefined}}>
      <div className="comingsoon-header">   
        <div className='wedding-logo-container'>
          <img src={LogoSrc} alt="Wedding Logo" style={{width: isMobile ? "250px" : "500px"}}/>
        </div>  
        <div className="comingsoon-text light-text" style={{marginTop: isMobile ? "-25px" : undefined}}>are getting married</div>
        <div className="comingsoon-date">11.5.22</div>
      </div>
      <div className="comingsoon-footer">
        <div className="comingsoon-text dark-text">
          {emojis}
        </div>
        <div className="comingsoon-text dark-text">
          This page is under construction 
        </div>
        <div className="comingsoon-text dark-text">
          {emojis}        
        </div>
      </div>
    </div>    
  );
}