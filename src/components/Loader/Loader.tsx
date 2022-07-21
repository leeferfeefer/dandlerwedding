import React from 'react';
import '../../App.css';
import './Loader.css';
import { BallTriangle } from "react-loader-spinner";

type LoaderProps = {
  isLoading: boolean;
};

export const Loader = (props: LoaderProps) => {
  const { isLoading } = props;
  
  return (
    <>
      { isLoading && <div className='loading-container'>
        <BallTriangle
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading-indicator"
        />
      </div> }
    </>
  );
}