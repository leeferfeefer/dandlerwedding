import React from 'react';
import '../../App.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { ComingSoon } from "../ComingSoon/ComingSoon";

type RegistryProps = {

};

export const Registry = (props: RegistryProps) => {
  return (
    <div className="container">
      <NavBar/>
      <ComingSoon/>
    </div>
  );
}