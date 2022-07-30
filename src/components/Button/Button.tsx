import React from 'react';
import '../../App.css';
import './Button.css';

type ButtonProps = {
  title?: string;
  onClick: () => void;
  componentRef?: any;
  style?: React.CSSProperties;
  imgSrc?: any;
  imgStyle?: React.CSSProperties;
};

export const Button = (props: ButtonProps) => {
  const { onClick, style, title, imgSrc, componentRef, imgStyle } = props;
    
  return (
    <div 
      className='button'
      ref={componentRef}    
      onClick={onClick} 
      style={style}>
        { title }
        { imgSrc && <img style={imgStyle} src={imgSrc} alt="button-img"/> }
    </div>
  );
};