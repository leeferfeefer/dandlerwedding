import React from 'react';
import '../../App.css';
import './Button.css';

type ButtonProps = {
  title: string;
  onClick: () => void;
  componentRef?: any;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  onMouseEnter?: (setStyleCallback: any) => void;
  onMouseLeave?: () => void;
  buttonClassName?: string;
};

export const Button = (props: ButtonProps) => {
  const { onClick, style, title, containerStyle, 
    componentRef, onMouseEnter, onMouseLeave, buttonClassName } = props;
  
  const [ styleState, setStyleState ] = React.useState<React.CSSProperties>(style ?? {});
  
  const _onMouseEnter = () => {
    onMouseEnter && onMouseEnter(setStyleState);
  };

  const _onMouseLeave = () => {
    onMouseLeave && onMouseLeave();
    setStyleState(style ?? {});
  };

  return (
    <div style={containerStyle}>
      <div 
        className={buttonClassName}
        ref={componentRef} 
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}        
        onClick={onClick} 
        style={styleState}>
          {title}
      </div>
    </div>
  );
};