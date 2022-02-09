import React from 'react';
import '../App.css';
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

type HomeProps = {};

export const Home = (props: HomeProps) => {

  return (
    <div className="main-container">
      <NavigationBar/>
    </div>
  );
}