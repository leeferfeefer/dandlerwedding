import React from 'react';
import '../../App.css';
import './RSVP.css';
import { useMediaQuery } from 'react-responsive';
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";
import { RSVPLookup } from '../../components/RSVP/RSVPLookup';
import { RSVPData } from '../../services/RSVP.service';
import { RSVPDetail } from "../../components/RSVP/RSVPDetail";

type RSVPProps = {

};

export const RSVP = (props: RSVPProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  const [ isLookupVisible, setIsLookupVisible ] = React.useState(true);
  const [ isDetailVisible, setIsDetailVisible ] = React.useState(false);  
  const [ rsvpData, setRsvpData ] = React.useState<RSVPData>();

  const RSVPOnSuccess = (rsvp: RSVPData) => {
    console.log("RETRIEVED DATA: ", rsvp);
    setRsvpData(rsvp);
    setIsLookupVisible(false);
    setIsDetailVisible(true);
  };

  const onDetailBackButtonClicked = () => {
    setIsLookupVisible(true);
    setIsDetailVisible(false);
  }; 

  return (
    <div className="container" style={{height: "100vh"}}>
      <div className="rsvp-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
        <img className="logo-img" src={LogoSrc} alt="Wedding Logo" style={{marginTop: "50px", maxWidth: isMobile ? "50%" : undefined }}/>
        <Card style={{
            marginTop: isMobile ? "25px" : "50px", 
            marginBottom: isMobile ? "300": "600px"
          }}>
          <div className="inner-card">
            { isLookupVisible && <RSVPLookup onSuccess={RSVPOnSuccess}/> }
            { rsvpData && isDetailVisible && <RSVPDetail onBackButtonClicked={onDetailBackButtonClicked} rsvpData={rsvpData}/> }
          </div>
        </Card>
      </div>
    </div>
  );
}