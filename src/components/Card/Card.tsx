import React from 'react';
import "./Card.css";

type CardProps = {
  style?: React.CSSProperties,
  children?: any,
};

export const Card = (props: CardProps) => {
  const { style, children} = props;
  return (
    <div className="card-container" style={style}>
      <div className='inner-container'>
        { children }
      </div>     
    </div>
  );
}