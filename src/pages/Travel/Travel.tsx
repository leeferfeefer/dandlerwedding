import React from 'react';
import '../../App.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { ComingSoon } from "../ComingSoon/ComingSoon";

type TravelProps = {

};

export const Travel = (props: TravelProps) => {
  return (
    <div className="container">
      <NavBar/>
      <ComingSoon/>
    </div>
  );
}