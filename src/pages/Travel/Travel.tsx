import React from 'react';
import '../../App.css';
import './Travel.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { useMediaQuery } from 'react-responsive';

const bookingURL = "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=ATLMAHF&groupCode=FORDCI&arrivaldate=2022-11-04&departuredate=2022-11-06&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT";
const mariettaSquareURL = "https://visitmariettaga.com/";
const kennesawMountainURL = "https://www.nps.gov/kemo/index.htm";

type TravelProps = {};

export const Travel = (props: TravelProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const buttonStyle: React.CSSProperties = {
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
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px", marginBottom: "15px"} : undefined}>
        Accomodations
      </div>
      <div className='accomodations-text' style={isMobile ? {fontSize: "20px", padding: 0, marginBottom: "30px"} : undefined}>
      The Hilton Marietta Conference Center is the 
preferred hotel for our wedding weekend and rooms have 
been reserved for our guests. It is the closest hotel to the venue and 
provides easy access to all of Marietta Square’s offerings. We have secured a discounted rate for guests who wish to stay here.
      </div>
      <Button 
        title={`Book Here`} 
        style={ buttonStyle } 
        onClick={bookHereButtonClicked}
      />
    </div>
  );

  const airTravel = (
    <div className='accomodations-container'>
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px", marginBottom: "15px"} : undefined}>
        Air Travel
      </div>
      <div className='accomodations-text' style={isMobile ? {fontSize: "20px", padding: 0} : undefined}>
      For our out of town guests, the closest major airport is 
Hartsfield Jackson International Airport. It is a 45 minute drive
from Marietta without traffic. Renting a car is recommended. 
      </div>     
    </div>
  );

  const parking = (
    <div className='accomodations-container'>
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px", marginBottom: "15px"} : undefined}>
        Parking
      </div>
      <div className='accomodations-text' style={isMobile ? {fontSize: "20px", padding: 0} : undefined}>
      Our venue does not have any designated parking spots, so any public Marietta Square parking is fair game. 
      There are a few spaces adjacent to the venue in the Marietta Station lot, but we cannot guarantee availability. 
      Parking on the square or in the public parking decks will require a short walk. For this reason, and so you 
      can celebrate without worry, we highly recommend taking Uber or Lyft. If you must drive, please allow ample 
      time for parking as Saturdays on the square are very busy. Late arrivals will not be allowed to enter the 
      venue while the ceremony is in progress. 
      </div>     
    </div>
  );

  const thingsToDo = (
    <div className='accomodations-container'>
      <div className='accomodations-header' style={isMobile ? {fontSize: "30px", marginBottom: "15px"} : undefined}>
        Things to Do
      </div>
      <div className='accomodations-text' style={isMobile ? {fontSize: "20px", padding: 0} : undefined}>
        Marietta Square has a wide variety of shopping, restaurants, and entertainment.
      </div>     
      <Button 
          title="Learn More" 
          style={buttonStyle} 
          onClick={() => window.open(mariettaSquareURL)}
        />
      <div className='accomodations-text' style={{marginTop: "40px", width: "75%", fontSize: isMobile ? "20px" : undefined, padding: isMobile ? "0" : undefined}}>
        Kennesaw Mountain National Battlefield Park is a short drive away and offers history and hiking.
      </div> 
      <Button 
          title="Learn More" 
          style={buttonStyle} 
          onClick={() => window.open(kennesawMountainURL)}
        />
    </div>
  );

  return (
    <div className="container">
      <NavBar/>
      <div className='travel-container' style={{ marginTop: isMobile ? "44px" : undefined}}>
        <div className='travel-header' style={ isMobile ? { fontSize: "75px", marginTop: "40px"} : undefined}>
          Travel
        </div>
        <Card style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px"}}>
          { accomodations }
        </Card>
        <Card style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px"}}>
          { airTravel}
        </Card>
        <Card style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px"}}>
          { parking }
        </Card>
        <Card style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "#CB683F", marginTop: isMobile ? "30px" : "50px", marginBottom: "100px"}}>
          { thingsToDo}
        </Card>
      </div>
    </div>
  );
}