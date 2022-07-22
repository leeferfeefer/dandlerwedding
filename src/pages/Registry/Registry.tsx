import React from 'react';
import '../../App.css';
import './Registry.css';
import { NavBar } from "../../components/NavBar/NavBar";
import CrateBarrelLogo from "../../images/Registry/CrateBarrel.png";
import WilliamsSonomaLogo from "../../images/Registry/WilliamsSonoma.png";
import WestElmLogo from "../../images/Registry/WestElm.png";
import Amazon from "../../images/Registry/Amazon.png";
import { Button } from '../../components/Button/Button';
import { useMediaQuery } from 'react-responsive';

const RegistryURLs = {
  crateAndBarrel: "https://www.crateandbarrel.com/gift-registry/chandler-ford-and-dan-fincher/r6548024",
  williamsWest: "https://www.westelm.com/registry/bhd5dhsrk6/registry-list.html",
  amazon: "https://www.amazon.com/wedding/dan-fincher-chandler-ford--november-2022/registry/3EGR1UEUYV5Q5"
};

type RegistryProps = {

};

export const Registry = (props: RegistryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const buttonContainer: React.CSSProperties = {
    marginTop: isMobile ? "13px" : "25px",
  };

  const buttonStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "20px" : "40px",
    backgroundColor: "#AE4A25",
    color: "#E4B2BC",
    fontFamily: "Avenir",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "150px" : "300px",
    margin: isMobile ? "10px" : "20px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const crateBarrelButtonClicked = () => {
    window.open(RegistryURLs.crateAndBarrel);
  };

  const williamswestButtonClicked = () => {
    window.open(RegistryURLs.williamsWest);
  };

  const amazonButtonClicked = () => {
    window.open(RegistryURLs.amazon);
  };

  return (
    <div className="container">
      <NavBar/>
      <div className="registry-container">
        <div className="registry-header">
          Registry
        </div>
        <div className="registry-secondary-header">
          The couple is registered at the following stores:
        </div>

        <div className='registry-place-container'>
          <div className="registry-place-image-container">
            <img src={CrateBarrelLogo} width="100%" alt="CrateBarrel Logo" />
          </div>
          <Button 
            style={buttonStyle}
            title="Go To Registry"
            onClick={crateBarrelButtonClicked}    
            containerStyle={buttonContainer}
            onMouseEnter={(setStyleState) => {
              setStyleState({...buttonStyle, opacity: .5})
            }}
          />
        </div>

        <div className='registry-place-container'>
          <div className="registry-place-image-container">
            <img src={WilliamsSonomaLogo} width="100%" alt="Williams Sonoma Logo" />
          </div>
          <div className='and-container'>&</div>
          <div className="registry-place-image-container" style={{width: "25%"}}>
            <img src={WestElmLogo} width="100%" alt="West Elm Logo" />
          </div>          
          <Button 
            style={buttonStyle}
            title="Go To Registry"
            onClick={williamswestButtonClicked}    
            containerStyle={buttonContainer}
            onMouseEnter={(setStyleState) => {
              setStyleState({...buttonStyle, opacity: .5})
            }}
          />
        </div>

        <div className='registry-place-container'>      
          <div className="registry-place-image-container" style={{width: "25%"}}>
            <img src={Amazon} width="100%" alt="Amazon Logo" />
          </div>          
          <Button 
            style={buttonStyle}
            title="Go To Registry"
            onClick={amazonButtonClicked}    
            containerStyle={buttonContainer}
            onMouseEnter={(setStyleState) => {
              setStyleState({...buttonStyle, opacity: .5})
            }}
          />
        </div>
      </div>
    </div>
  );
}