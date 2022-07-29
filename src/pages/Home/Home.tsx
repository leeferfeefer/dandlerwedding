import React from 'react';
import '../../App.css';
import "./Home.css";
import { NavBar } from "../../components/NavBar/NavBar";
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";
import WhenImageSrc from "../../images/WhenImage.png";
import WhereImageSrc from "../../images/WhereImage.png";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

type HomeProps = {};

export const Home = (props: HomeProps) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const letsPartyContainerStyle: React.CSSProperties = {
    marginTop: isMobile ? "50px" : "100px",
    marginBottom: isMobile ? "150px" : "300px",
  };

  const letsPartyStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "20px" : "40px",
    backgroundColor: "#CB683F",
    color: "#E6C2A9",
    fontFamily: "Avenir",
    fontSize: isMobile ? "20px" : "40px",
    width: isMobile ? "150px" : "300px",
    margin: isMobile ? "10px" : "20px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const whenComponent = (
    <div className='when-container'>
      <div className='when-image-container'>
        <img src={WhenImageSrc} alt="Main Page Image 1" width="100%" style={{borderRadius: "15px"}}/>
      </div>
      <div className="when-text-container" style={isMobile ? {marginLeft: "20px", flex: .7} : undefined}>
        <div className='when-text' style={{fontSize: isMobile ? "40px" : undefined}}>
          When
        </div>
        <div className='date-text' style={{fontSize: isMobile ? "20px" : undefined}}>
          November 5th, 2022
        </div>
      </div>
    </div>
  )

  const whereComponent = (
    <div className='where-container'>
      <div className='where-text-container' style={isMobile ? {marginRight: "20px", flex: .7} : undefined}>
        <div className='where-text' style={{fontSize: isMobile ? "40px" : undefined}}>
          Where
        </div>
        <div className='where-place-container'>
          <div className='brickyard-text' style={{fontSize: isMobile ? "19px" : undefined}}>
            The Brickyard
          </div>
          <div className='marietta-text' style={{fontSize: isMobile ? "19px" : undefined}}>
            Marietta, GA
          </div>
        </div>    
      </div>    
      <div className='where-image-container'>
        <img src={WhereImageSrc} alt="Main Page Image 2" width="100%" style={{borderRadius: "15px"}}/>
      </div>
    </div>
  );

  const letsPartyButtonClicked = () => {
    navigate("/wedding");
  };  

  return (
    <div className="container">
      <NavBar/>
      <div className="home-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
        <img className="logo-img" src={LogoSrc} alt="Wedding Logo" style={{marginTop: "50px", maxWidth: isMobile ? "50%" : undefined }}/>
        <Card style={{marginTop: isMobile ? "25px" : "50px"}}>
          { whenComponent }
        </Card>
        <Card style={{marginTop: isMobile ? "25px" : "50px"}}>
          { whereComponent }
        </Card>
        <Button 
          title={`Let's Party!`} 
          style={letsPartyStyle} 
          containerStyle={letsPartyContainerStyle}
          onClick={letsPartyButtonClicked}
          onMouseEnter={(setStyleState) => {
            setStyleState({...letsPartyStyle, opacity: .5})
          }}
        />
      </div>
    </div>
  );
}