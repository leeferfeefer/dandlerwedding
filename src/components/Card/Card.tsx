import React from 'react';
import "./Card.css";
import { useMediaQuery } from 'react-responsive';

type CardProps = {
  style?: React.CSSProperties,
  children?: any,
};

export const Card = (props: CardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const { style, children} = props;
  return (
    <div className="card-container" style={{...style, width: isMobile ? "90%" : undefined}}>
      <div className='inner-container' style={{margin: isMobile ? "15px" : undefined}}>
        { children }
      </div>     
    </div>
  );
}