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


/**
 * 
 * @param props React.useEffect(() => {
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
 * @returns 
 */

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