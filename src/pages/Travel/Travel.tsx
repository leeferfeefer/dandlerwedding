import React from 'react';
import '../../App.css';
import './Travel.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { useMediaQuery } from 'react-responsive';

const bookingURL = "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=ATLMAHF&groupCode=FORDCI&arrivaldate=2022-11-04&departuredate=2022-11-06&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT";

type TravelProps = {};

export const Travel = (props: TravelProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const bookHereStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "60px",
    borderRadius: isMobile ? "20px" : "30px",
    backgroundColor: "black",
    color: "#E6C2A9",
    fontFamily: "Avenir",
    fontSize: isMobile ? "18px": "28px",
    width: isMobile ? "120px" : "200px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const bookHereButtonClicked = () => {
    window.open(bookingURL);
  };  

  const accomodations = (
    <div className='accomodations-container'>
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px"} : undefined}>
        Accomodations
      </div>
      <div className='accomadations-text' style={isMobile ? {fontSize: "20px", padding: 0} : undefined}>
      The Hilton Marietta Conference Center is the 
preferred hotel for our wedding weekend and rooms have 
been reserved for our guests. It is the closest hotel to the venue and 
provides easy access to all of Marietta Square’s offerings.
      </div>
      <Button 
        title={`Book Here`} 
        style={ bookHereStyle } 
        onClick={bookHereButtonClicked}
        onMouseEnter={(setStyleState) => {
          setStyleState({...bookHereStyle, opacity: .5})
        }}
      />
    </div>
  );

  const airTravel = (
    <div className='accomodations-container'>
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px"} : undefined}>
        Air Travel
      </div>
      <div className='accomadations-text' style={isMobile ? {fontSize: "20px", padding: 0} : undefined}>
      For our out of town guests, the closest major airport is 
Hartsfield Jackson International Airport. It is a 45 minute drive
from Marietta without traffic. Renting a car is recommended. 
      </div>     
    </div>
  )

  return (
    <div className="container">
      <NavBar/>
      <div className='travel-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <div className='travel-header' style={ isMobile ? { fontSize: "75px", marginTop: "40px"} : undefined}>
          Travel
        </div>
        <Card style={{ borderWidth: "8px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px"}}>
          { accomodations }
        </Card>
        <Card style={{ borderWidth: "8px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px", marginBottom: "100px"}}>
          { airTravel}
        </Card>
      </div>
    </div>
  );
}