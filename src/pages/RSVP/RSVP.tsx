import React from 'react';
import '../../App.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { ComingSoon } from "../ComingSoon/ComingSoon";

type RSVPProps = {

};

export const RSVP = (props: RSVPProps) => {
  return (
    <div className="container">
    <NavBar/>
    <ComingSoon/>
  </div>
  );
}