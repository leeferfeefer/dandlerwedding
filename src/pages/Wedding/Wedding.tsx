import React from 'react';
import '../../App.css';
import './Wedding.css';
import { Card } from "../../components/Card/Card";
import { useMediaQuery } from 'react-responsive';
import WeddingTimeline from "../../images/WeddingTimeline.png";
import { useNavigate } from "react-router-dom";

type WeddingProps = {};

export const Wedding = (props: WeddingProps) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onLinkClicked = () => {
    navigate("/travel");
  };

  return (
    <div className="container">
      <div className='wedding-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <div className='wedding-header' style={ isMobile ? { fontSize: "75px", marginTop: "40px"} : undefined}>
          The Wedding
        </div>
        <Card style={{marginTop: isMobile ? "25px" : "50px"}}>
          <div className='wedding-card-container'>
            <div className='wedding-date-primary'>
              November 5, 2022
            </div>
            <div className='wedding-date-secondary'>
              Saturday
            </div>
            <div className='wedding-date-secondary'>
              5:00 PM
            </div>
            <div className='wedding-date-primary' style={{marginTop: "40px"}}>
              The Brickyard
            </div>
            <div className='wedding-date-secondary'>
              129 Church Street 
            </div>
            <div className='wedding-date-secondary'>
              Marietta, GA 30060
            </div>
          </div>
        </Card>
        <img 
          className="timeline-img" 
          src={WeddingTimeline} 
          style={{marginTop: "50px", width: "90%"}}
        />
        <Card style={{marginTop: isMobile ? "25px" : "50px", marginBottom: "300px"}}>
          <div className='wedding-card-container'>
            <div className='wedding-location-text'>
                      The Brickyard is located in Marietta Station, behind
          The Third Door and Tuesday's Coffee; across the
          street from Marietta First Baptist. Look for the
          green Marietta Station sign. Information about parking
          can be found on our <a onClick={onLinkClicked} href="">Travel Page</a>.
            </div>            
          </div>
        </Card>
      </div>
    </div>
  );
}