import React from 'react';
import '../../App.css';
import './Button.css';

type ButtonProps = {
  title?: string;
  onClick: () => void;
  componentRef?: any;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  onMouseEnter?: (setStyleCallback: any) => void;
  onMouseLeave?: () => void;
  buttonClassName?: string;
  imgSrc?: any;
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { onClick, style, title, containerStyle, imgSrc,
    componentRef, onMouseEnter, onMouseLeave, buttonClassName, disabled } = props;
  const [ styleState, setStyleState ] = React.useState<React.CSSProperties>(style ?? {});

  React.useEffect(() => {
    if (disabled) {
      setStyleState({ ...styleState, backgroundColor: 'gray', cursor: 'not-allowed'});
    } else {
      setStyleState({ ...styleState, backgroundColor: style?.backgroundColor, cursor: style?.cursor});
    }
  }, [disabled]);
  
  const _onMouseEnter = () => {
    !disabled && onMouseEnter && onMouseEnter(setStyleState);
  };

  const _onMouseLeave = () => {
    if (!disabled) {
      onMouseLeave && onMouseLeave();
      setStyleState(style ?? {});
    }
  };

  return (
    <div style={containerStyle}>
      <div         
        className={buttonClassName}
        ref={componentRef} 
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}        
        onClick={disabled ? () => {} : onClick} 
        style={styleState}>
          { title }
          { imgSrc && <img src={imgSrc} alt="button-img"/> }
      </div>
    </div>
  );
};