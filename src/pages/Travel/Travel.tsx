import React from 'react';
import '../../App.css';
import './Travel.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "../../components/Card/Card";

type TravelProps = {

};

export const Travel = (props: TravelProps) => {
  return (
    <div className="container">
      <NavBar/>
      <div className='travel-container'>
        <div className='travel-header'>
          Travel
        </div>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}