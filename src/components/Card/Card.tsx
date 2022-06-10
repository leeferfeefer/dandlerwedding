import React from 'react';
import "./Card.css";

type CardProps = {
  leftComponent: any,
  rightComponent: any,
  style: React.CSSProperties,
};

export const Card = (props: CardProps) => {
  const { leftComponent, rightComponent, style } = props;
  return (
    <div className="card-container" style={style}>
      <div className='inner-container'>
        <div className='left-container'>
          { leftComponent }
        </div>
        <div className='right-container'>
          { rightComponent }
        </div>
      </div>     
    </div>
  );
}