import React from 'react';
import '../../App.css';
import "./Home.css";
import { NavBar } from "../../components/NavBar/NavBar";
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";
import WhenImageSrc from "../../images/WhenImage.png";
import WhereImageSrc from "../../images/WhereImage.png";
import { Button } from "../../components/Button/Button";


const letsPartyStyle: React.CSSProperties = {
  height: "80px",
  borderRadius: "40px",
  backgroundColor: "#CB683F",
  color: "#E6C2A9",
  fontFamily: "RocGrotesk",
  fontSize: "40px",
  width: "300px",
  margin: "20px",
  display: 'flex',
  textAlign: 'center',
  alignItems: "center",
  justifyContent: "center",
};

const letsPartyContainerStyle: React.CSSProperties = {
  marginTop: "100px",
  marginBottom: "300px",
};

type HomeProps = {};


export const Home = (props: HomeProps) => {
  const buttonRef = React.useRef<HTMLElement>(null);

  const whenText = (
    <div className="when-text-container">
      <div className='when-text'>
        When
      </div>
      <div className='date-text'>
        November 5th, 2022
      </div>
    </div>
  );
  const whereText = (
    <div className='where-text-container'>
      <div className='where-text'>
        Where
      </div>
      <div className='where-place-container'>
        <div className='brickyard-text'>
          The Brickyard
        </div>
        <div className='marietta-text'>
          Marietta, GA
        </div>
      </div>    
    </div>
  );
  const whenImg = <img src={WhenImageSrc} alt="Main Page Image 1" width="100%" style={{borderRadius: "15px"}}/>
  const whereImg = <img src={WhereImageSrc} alt="Main Page Image 2" width="100%" style={{borderRadius: "15px"}}/>

  const letsPartyButtonClicked = () => {
    console.log("LETS PARTY!!!!");
  };  

  return (
    <div className="container">
      <NavBar/>
      <div className="home-container"> 
        <img src={LogoSrc} alt="Wedding Logo" width={500} style={{marginTop: "50px"}}/>
        <Card leftComponent={whenImg} rightComponent={whenText} style={{marginTop: "50px"}}/>
        <Card leftComponent={whereText} rightComponent={whereImg} style={{marginTop: "50px"}}/>
        <Button 
            componentRef={buttonRef}
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