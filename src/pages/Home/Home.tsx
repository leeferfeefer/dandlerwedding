import React from 'react';
import '../../App.css';
import "./Home.css";
import { NavBar } from "../../components/NavBar/NavBar";
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";
import WhenImageSrc from "../../images/WhenImage.png";
import WhereImageSrc from "../../images/WhereImage.png";

type HomeProps = {};

export const Home = (props: HomeProps) => {

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
  const whereText = <div>Where</div>;
  const whenImg = <img src={WhenImageSrc} alt="Main Page Image 1" width="100%" style={{borderRadius: "15px"}}/>
  const whereImg = <img src={WhereImageSrc} alt="Main Page Image 2" width="100%" style={{borderRadius: "15px"}}/>


  return (
    <div className="main-container">
      <NavBar/>
      <div className="home-container"> 
        <img src={LogoSrc} alt="Wedding Logo" width={500} style={{marginTop: "50px"}}/>
        <Card leftComponent={whenImg} rightComponent={whenText} style={{marginTop: "50px"}}/>
        <Card leftComponent={whereText} rightComponent={whereImg} style={{marginTop: "50px"}}/>
      </div>
    </div>
  );
}