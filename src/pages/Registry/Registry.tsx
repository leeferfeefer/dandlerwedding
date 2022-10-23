import React from 'react';
import '../../App.css';
import './Registry.css';
import CrateBarrelLogo from "../../images/Registry/CrateBarrel.png";
import WilliamsSonomaLogo from "../../images/Registry/WilliamsSonoma.png";
import WestElmLogo from "../../images/Registry/WestElm.png";
import Amazon from "../../images/Registry/Amazon.png";
import { Button } from '../../components/Button/Button';
import { useMediaQuery } from 'react-responsive';

const RegistryURLs = {
  honeyfund: "https://www.honeyfund.com/wedding/fincher-ford-11-05-2022",
  crateAndBarrel: "https://www.crateandbarrel.com/gift-registry/chandler-ford-and-dan-fincher/r6548024",
  williamsWest: "https://www.westelm.com/registry/bhd5dhsrk6/registry-list.html",
  amazon: "https://www.amazon.com/wedding/dan-fincher-chandler-ford--november-2022/registry/3EGR1UEUYV5Q5"
};

type RegistryProps = {

};

export const Registry = (props: RegistryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const buttonStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "20px" : "40px",
    backgroundColor: "#AE4A25",
    color: "#E4B2BC",
    fontFamily: "Avenir",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "150px" : "300px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const honeyfundButtonClicked = () => {
    window.open(RegistryURLs.honeyfund);
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
      <div className="registry-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
        <div className="registry-header" style={ isMobile ? { fontSize: "75px", marginTop: "40px"} : undefined}>
          Registry
        </div>


        <div className="registry-places" style={{marginTop: isMobile ? "20px" : "50px", marginBottom: "100px"}}>

        <hr className='divider' style={isMobile ? 
            { marginTop: "30px", marginBottom: "30px" } : 
            { marginTop: "60px", marginBottom: "60px"}
          }/>

          <div className='registry-place-container'>
            <div className='button-container'>
              <Button 
                style={{...buttonStyle, width: isMobile ? "250px" : "500px"}}
                title="Contribute to our honeymoon!"
                onClick={honeyfundButtonClicked}    
              />
            </div>            
          </div>

          <hr className='divider' style={isMobile ? 
            { marginTop: "30px", marginBottom: "30px" } : 
            { marginTop: "60px", marginBottom: "60px"}
          }/>

          <div className='registry-place-container'>
            <div className="registry-place-image-container">
              <img src={CrateBarrelLogo} width="100%" alt="CrateBarrel Logo" />
            </div>
            <div className='button-container' style={{marginTop: isMobile ? "20px" : "50px"}}>
              <Button 
                style={buttonStyle}
                title="Go To Registry"
                onClick={crateBarrelButtonClicked}    
              />
            </div>            
          </div>

          <hr className='divider' style={isMobile ? 
            { marginTop: "30px", marginBottom: "30px" } : 
            { marginTop: "60px", marginBottom: "60px"}
          }/>

          <div className='registry-place-container'>
            <div className="registry-place-image-container" style={{width: isMobile ? "75%" : undefined}}>
              <img src={WilliamsSonomaLogo} width="100%" alt="Williams Sonoma Logo" />
            </div>
            <div className='and-container' style={isMobile ? {fontSize: "20px"} : undefined}>&</div>
            <div className="registry-place-image-container" style={{width: isMobile ? "50%" : "30%"}}>
              <img src={WestElmLogo} width="100%" alt="West Elm Logo" />
            </div>      
            <div className='button-container' style={{marginTop: isMobile ? "5px" : "20px"}}>
              <Button 
                style={buttonStyle}
                title="Go To Registry"
                onClick={williamswestButtonClicked}    
              />
            </div>
          </div>

          <hr className='divider' style={isMobile ? 
            { marginTop: "30px", marginBottom: "30px" } : 
            { marginTop: "60px", marginBottom: "60px"}
          }/>

          <div className='registry-place-container'>
            <div className="registry-place-image-container" style={{width: isMobile ? "50%" : "30%"}}>
              <img src={Amazon} width="100%" alt="Amazon Logo" />
            </div>       
            <div className='button-container' style={{marginTop: isMobile ? "5px" : "20px"}}>
              <Button 
                style={buttonStyle}
                title="Go To Registry"
                onClick={amazonButtonClicked}    
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}