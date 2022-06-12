import React from 'react';
import '../../App.css';
import './Travel.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";



const bookHereStyle: React.CSSProperties = {
  height: "80px",
  borderRadius: "40px",
  backgroundColor: "black",
  color: "#E6C2A9",
  fontFamily: "Avenir",
  fontSize: "40px",
  width: "300px",
  display: 'flex',
  textAlign: 'center',
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};


type TravelProps = {

};

export const Travel = (props: TravelProps) => {


  const bookHereButtonClicked = () => {
    console.log("BOOKING!!!!");
  };  

  const accomodations = (
    <div className='accomodations-container'>
      <div className='accomodations-header'>
        Accomodations
      </div>
      <div className='accomadations-text'>
      The Hilton Marietta Conference Center is the 
preferred hotel for our wedding weekend and rooms have 
been reserved for our guests. It is the closest hotel to the venue and 
provides easy access to all of Marietta Square’s offerings.
      </div>
      <Button 
        title={`Book Here`} 
        style={bookHereStyle} 
        onClick={bookHereButtonClicked}
        onMouseEnter={(setStyleState) => {
          setStyleState({...bookHereStyle, opacity: .5})
        }}
      />
    </div>
  );

  const airTravel = (
    <div className='accomodations-container'>
      <div className='accomodations-header'>
        Air Travel
      </div>
      <div className='accomadations-text'>
      For our out of town guests, the closest major airport is 
Hartsfield Jackson International Airport. It is a 45 minute drive
from Marietta without traffic. Renting a car is recommended. 
      </div>     
    </div>
  )

  return (
    <div className="container">
      <NavBar/>
      <div className='travel-container'>
        <div className='travel-header'>
          Travel
        </div>
        <Card style={{ borderWidth: "8px", borderStyle: "solid", borderColor: "#CB683F", marginTop: "50px"}}>
          { accomodations }
        </Card>
        <Card style={{ borderWidth: "8px", borderStyle: "solid", borderColor: "#CB683F", marginTop: "50px", marginBottom: "100px"}}>
          { airTravel}
        </Card>
      </div>
    </div>
  );
}