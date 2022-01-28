import React from 'react';
import logo from "../images/WeddingLogo.png";
import '../App.css';

type ComingSoonProps = {};

export const ComingSoon = (props: ComingSoonProps) => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{
        backgroundColor: "#AE4A25",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-around",
        alignItems: 'center'
      }}>     
        <img src={logo} alt="Wedding Logo" width={500}/>
        <span className="comingsoon-text light-text">are getting married</span>
        <span className="comingsoon-date">11.5.22</span>
      </div>
      <div style={{
        backgroundColor: "#E6C2A9",
        height: "20%",  
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'center'
      }}>
        <span className="comingsoon-text dark-text">save the date, and check back often for more details</span>
      </div>
    </div>
  );
}