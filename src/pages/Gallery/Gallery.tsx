import React from 'react';
import '../../App.css';
import { NavBar } from "../../components/NavBar/NavBar";
import { ComingSoon } from "../ComingSoon/ComingSoon";

type GalleryProps = {

};

export const Gallery = (props: GalleryProps) => {
  return (
    <div className="container">
      <NavBar/>
      <ComingSoon/>
    </div>
  );
}