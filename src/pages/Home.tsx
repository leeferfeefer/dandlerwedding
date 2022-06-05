import React from 'react';
import '../App.css';
// import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { NavBar } from "../components/NavBar/NavBar";

type HomeProps = {};

export const Home = (props: HomeProps) => {

  return (
    <nav className="main-container">
      <NavBar/>
      <div style={{height: 1000}}> 
        something
      </div>
    </nav>
  );
}