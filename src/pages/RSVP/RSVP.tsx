import React from 'react';
import '../../App.css';
import './RSVP.css';
import { useMediaQuery } from 'react-responsive';
import LogoSrc from "../../images/WeddingLogo.png";
import { Card } from "../../components/Card/Card";
import { RSVPLookup } from '../../components/RSVP/RSVPLookup';
import { RSVPData } from '../../services/RSVP.service';
import { RSVPDetail, RSVPState } from "../../components/RSVP/RSVPDetail";
import { RSVPDietary } from '../../components/RSVP/RSVPDietary';

type RSVPProps = {

};

export const RSVP = (props: RSVPProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  const [ isLookupVisible, setIsLookupVisible ] = React.useState(true);
  const [ isDetailVisible, setIsDetailVisible ] = React.useState(false);  
  const [ isDietaryVisible, setIsDietaryVisible ] = React.useState(false);
  const [ isSuccessVisible, setIsSuccessVisible ] = React.useState(false); 
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

  const onDetailContinueButtonClicked = (reservationState: RSVPState) => {
    setRsvpData({
      ...rsvpData!,
      rsvp: reservationState,
    });
    setIsDetailVisible(false);
    setIsDietaryVisible(true);
  };

  const onDietaryBackButtonClicked = () => {
    setIsDetailVisible(true);
    setIsDietaryVisible(false);
  };

  const onRSVPSubmitted = () => {
    setIsDietaryVisible(false);
    setIsSuccessVisible(true);
  };

  return (
    <div className="container" style={{height: "100vh"}}>
      <div className="rsvp-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
        <img className="logo-img" src={LogoSrc} alt="Wedding Logo" style={{marginTop: "50px", maxWidth: isMobile ? "50%" : undefined }}/>
        <Card style={{
            marginTop: isMobile ? "25px" : "50px", 
            marginBottom: isMobile ? "300": "600px"
          }}>
          <div className="rsvp-inner-card">
            { isLookupVisible && <RSVPLookup onSuccess={RSVPOnSuccess}/> }
            { rsvpData && isDetailVisible && (
              <RSVPDetail 
                onBackButtonClicked={onDetailBackButtonClicked} 
                onContinueButtonClicked={onDetailContinueButtonClicked} 
                rsvpData={rsvpData}
              /> 
            )}
            { rsvpData && isDietaryVisible && (
              <RSVPDietary 
                onSuccess={onRSVPSubmitted}
                onBackButtonClicked={onDietaryBackButtonClicked} 
                rsvpData={rsvpData}
              />
            )}
            { isSuccessVisible && (
              <div className='rsvp-success-container'>
                <div className='rsvp-success-message-header'>
                  Thank you for your RSVP!
                </div>
                <div className='rsvp-success-message'>
                  We look forward to celebrating with you!
                </div>
              </div>
            )}
          </div>  
        </Card>
      </div>
    </div>
  );
}