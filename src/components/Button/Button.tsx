import React from 'react';
import '../../App.css';
import './Button.css';
import Radium from "radium";

type ButtonProps = {
  title?: string;
  onClick: () => void;
  componentRef?: any;
  style?: React.CSSProperties;
  imgSrc?: any;
  imgStyle?: React.CSSProperties;
  disabled?: boolean;
};

const RealButton = (props: ButtonProps) => {
  const { onClick, style, title, imgSrc, componentRef, imgStyle,
    disabled } = props;

  const [ styleState, setStyleState ] = React.useState((style as any) ?? {});

  React.useEffect(() => {
    if (disabled) {
      setStyleState({ ...style, backgroundColor: 'gray', cursor: 'not-allowed', ":hover": {opacity: "1"}, ":active": {opacity: "1"}});
    } else {
      setStyleState({ ...style});
    }
  }, [disabled, style]);

    
  return (
    <div 
      className='button'
      ref={componentRef}    
      onClick={disabled ? () => {} : onClick} 
      style={styleState}>
        { title }
        { imgSrc && <img style={imgStyle} src={imgSrc} alt="button-img"/> }
    </div>
  );
};

export const Button = Radium(RealButton);