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
  fontFamily: "Avenir",
  fontSize: "40px",
  width: "300px",
  margin: "20px",
  display: 'flex',
  textAlign: 'center',
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const letsPartyContainerStyle: React.CSSProperties = {
  marginTop: "100px",
  marginBottom: "300px",
};

type HomeProps = {};
// {leftComponent && <div className='left-container'>
// { leftComponent }
// </div> }
// {rightComponent && <div className='right-container'>
// { rightComponent }
// </div> }
//   flex-direction: row;
//  flex: 1;
// display: flex;

export const Home = (props: HomeProps) => {

  const whenComponent = (
    <div className='when-container'>
      <div className='when-image-container'>
        <img src={WhenImageSrc} alt="Main Page Image 1" width="100%" style={{borderRadius: "15px"}}/>
      </div>
      <div className="when-text-container">
        <div className='when-text'>
          When
        </div>
        <div className='date-text'>
          November 5th, 2022
        </div>
      </div>
    </div>
  )

  const whereComponent = (
    <div className='where-container'>
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
      <div className='where-image-container'>
        <img src={WhereImageSrc} alt="Main Page Image 2" width="100%" style={{borderRadius: "15px"}}/>
      </div>
    </div>
  );
  

  const letsPartyButtonClicked = () => {
    console.log("LETS PARTY!!!!");
  };  

  return (
    <div className="container">
      <NavBar/>
      <div className="home-container"> 
        <img src={LogoSrc} alt="Wedding Logo" width={500} style={{marginTop: "50px"}}/>
        <Card style={{marginTop: "50px"}}>
          { whenComponent }
        </Card>
        <Card style={{marginTop: "50px"}}>
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