import React from 'react';
import './RSVPDietary.css';
import { useMediaQuery } from 'react-responsive';
import { RSVPData } from '../../services/RSVP.service';
import { Button } from '../Button/Button';
import { RSVPState } from './RSVPDetail';
import { capitalizeFirstLetters } from '../../Globals';

type RSVPDietaryProps = {
  rsvpData: RSVPData;
  reservationState: RSVPState;
  onBackButtonClicked: () => void;
};

export type DietaryRestrictions = {
  [key: string]: string;
}

export const RSVPDietary = (props: RSVPDietaryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ dietaryRestrictions, setDietaryRestrictions ] = React.useState<DietaryRestrictions>({});

  const backButtonClicked = () => {
    props.onBackButtonClicked();
  };

  const submitButtonClicked = () => {


    // send mongo db call - use rsvpData, reservationState, and dietary restrictions
    // handle error

  };

  const onInputChange = (event: any, name: string) => {
    const value = event.target.value;
    setDietaryRestrictions({...dietaryRestrictions, [name]: value})
  };

  return (
    <div className='rsvp-dietary-container'>
      <div className='rsvp-dietary-header'>
        Do you have any dietary restrictions?
      </div>
      <div className='rsvp-dietary-name'>
        {capitalizeFirstLetters(props.rsvpData.name)}
      </div>
      <input className='rsvp-dietary-input' onChange={(e) => onInputChange(e, props.rsvpData.name)}/>  
      {props.rsvpData.alternateNames.map(altName => (
        <>
          <div className='rsvp-dietary-name'>
            {capitalizeFirstLetters(altName)}
          </div>
          <input className='rsvp-dietary-input' onChange={(e) => onInputChange(e, altName)}/>  
        </>
      ))}
      <Button onClick={backButtonClicked}/>
      <Button onClick={submitButtonClicked}/>
    </div>
  );
}