import React from 'react';
import '../../App.css';
import { ComingSoon } from "../ComingSoon/ComingSoon";

type WeddingProps = {

};

export const Wedding = (props: WeddingProps) => {
  return (
    <div className="container">
      <ComingSoon/>
    </div>
  );
}