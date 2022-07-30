import React from 'react';
import '../../App.css';
import { ComingSoon } from "../ComingSoon/ComingSoon";

type RSVPProps = {

};

export const RSVP = (props: RSVPProps) => {
  return (
    <div className="container">
    <ComingSoon/>
  </div>
  );
}