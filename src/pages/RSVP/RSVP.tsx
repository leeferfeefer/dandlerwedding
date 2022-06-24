import React from 'react';
import '../../App.css';
import './RSVP.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { useMediaQuery } from 'react-responsive';
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";

type RSVPProps = {

};

export const RSVP = (props: RSVPProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const inputStyle: React.CSSProperties = {
    height: isMobile ? "20px" : "40px",
    borderRadius: isMobile ? "5px" : "10px",
    backgroundColor: "#E4B2BC",
    // color: "#E6C2A9",
    fontFamily: "Curvilingus",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "200px" : "400px",
    marginTop: isMobile ? "20px" : "30px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent"
  };

  return (
    <div className="container" style={{height: "100vh"}}>
      <NavBar/>
      <div className="rsvp-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
        <img className="logo-img" src={LogoSrc} alt="Wedding Logo" style={{marginTop: "50px", maxWidth: isMobile ? "50%" : undefined }}/>
        <Card style={{marginTop: isMobile ? "25px" : "50px"}}>
          <div className="inner-card">
            <div className='rsvp-text' style={isMobile ? {fontSize: "15px", width: "80%"} : undefined}>
              If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
            </div>
            <input placeholder='Full Name' style={inputStyle}/>
          </div>
        </Card>
      </div>
    </div>
  );
}