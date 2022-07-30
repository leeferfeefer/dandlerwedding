import React from 'react';
import '../../App.css';
import './Button.css';

type ButtonProps = {
  title?: string;
  onClick: () => void;
  componentRef?: any;
  style?: React.CSSProperties;
  imgSrc?: any;
};

export const Button = (props: ButtonProps) => {
  const { onClick, style, title, imgSrc, componentRef } = props;
    
  return (
    <div 
      className='button'
      ref={componentRef}    
      onClick={onClick} 
      style={style}>
        { title }
        { imgSrc && <img src={imgSrc} alt="button-img"/> }
    </div>
  );
};