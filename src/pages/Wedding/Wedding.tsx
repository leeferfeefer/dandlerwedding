import React from 'react';
import '../../App.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { ComingSoon } from "../ComingSoon/ComingSoon";

type WeddingProps = {

};

export const Wedding = (props: WeddingProps) => {
  return (
    <div className="container">
      <NavBar/>
      <ComingSoon/>
    </div>
  );
}