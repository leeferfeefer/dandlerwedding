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
export const Button = (props: ButtonProps) => {
  const { onClick, style, title, containerStyle, imgSrc,
    componentRef, onMouseEnter, onMouseLeave, buttonClassName, disabled } = props;
  const [ styleState, setStyleState ] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    if (disabled) {
      setStyleState({ ...style, backgroundColor: 'gray', cursor: 'not-allowed'});
    } else {
      setStyleState({ ...style, backgroundColor: style?.backgroundColor, cursor: style?.cursor});
    }
  }, [disabled, style]);
  
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