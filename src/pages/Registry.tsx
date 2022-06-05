import React from 'react';
import '../App.css';
import { NavBar } from "../components/NavBar/NavBar";

type RegistryProps = {

};

export const Registry = (props: RegistryProps) => {
  return (
    <div className="main-container">
      <NavBar/>
      <div style={{height: 1000}}> 
        Coming Soon!
      </div>
    </div>
  );
}