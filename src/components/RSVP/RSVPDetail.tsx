import React from 'react';
import './RSVPDetail.css';
import { useMediaQuery } from 'react-responsive';
import { Button } from "../Button/Button";
import { RSVPData } from '../../services/RSVP.service';

type RSVPDetailProps = {
  onBackButtonClicked: () => void,
  rsvpData: RSVPData,
};

type RSVPState = {
  [ key: string ]: boolean,
}

type RSVPNameProps = {
  name: string,
  onSelected: (state: RSVPState) => void,
};

enum SelectionState {
  None,
  Accepted,
  Declined
}

const RSVPName = (props: RSVPNameProps) => {
  const [ selectedState, setSelectedState] = React.useState<SelectionState>(SelectionState.None);
  
  React.useEffect(() => {
    props.onSelected({[props.name]: selectedState === SelectionState.Accepted});
  }, [ selectedState ]);

  const acceptButtonClicked = () => {
    setSelectedState(SelectionState.Accepted);
  };

  const declineButtonClicked = () => {
    setSelectedState(SelectionState.Declined);
  };

  return (
    <div className='name-container'>
      <div className='name'>{props.name}</div>
      <div className='rsvp-button-container'>
        <Button
          title='Accept'
          onClick={acceptButtonClicked}
        />
        <Button
          title='Decline'
          onClick={declineButtonClicked}
        />
      </div>
    </div>
  );
};

export const RSVPDetail = (props: RSVPDetailProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  const [ reservationState, setReservationState ] = React.useState<RSVPState>({});
  const [ isContinueButtonDisabled, setIsContinueButtonDisabled ] = React.useState(true);

  React.useEffect(() => {
    if (Object.keys(reservationState).length === props.rsvpData.totalCount) {
      setIsContinueButtonDisabled(false);
    }
  }, [ Object.keys(reservationState).length ]);

  const goBackContainerStyle: React.CSSProperties = {
    // marginTop: isMobile ? "50px" : "100px",
    // marginBottom: isMobile ? "150px" : "300px",
  };

  const goBackStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "5px" : "10px",
    backgroundColor: "#CB683F",
    color: "#E6C2A9",
    fontFamily: "Curvilingus",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "200px" : "400px",
    margin: isMobile ? "10px" : "20px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const goBackButtonPressed = () => {
    props.onBackButtonClicked();
  };

  const continueButtonPressed = () => {
    // send rsvp state back to RSVP page
  }

  const rsvpStateSelected = (rsvpState: RSVPState) => {

  };

  return (
    <>
      <div className='header-container'>
        <div className='title'>
          Wedding Day
        </div>
        <div className='date'>
          Saturday, November 5th 2022
        </div>
      </div>
      <div className='names-container'>
        <RSVPName name={props.rsvpData.name} onSelected={rsvpStateSelected}/>
        { props.rsvpData.alternateNames.map(alternate => {
          return <RSVPName name={alternate} onSelected={rsvpStateSelected}/>;
        })}
      </div>
      <Button 
        title='Continue' 
        disabled={isContinueButtonDisabled}
        style={goBackStyle} 
        containerStyle={goBackContainerStyle}
        onClick={continueButtonPressed}
        onMouseEnter={(setStyleState) => {
          setStyleState({...goBackStyle, opacity: .5})
        }}
      />
      <Button 
        title='Go Back'
        style={goBackStyle} 
        containerStyle={goBackContainerStyle}
        onClick={goBackButtonPressed}
        onMouseEnter={(setStyleState) => {
          setStyleState({...goBackStyle, opacity: .5})
        }}
      />
    </>
  );
};