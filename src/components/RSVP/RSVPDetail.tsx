import React from 'react';
import './RSVPDetail.css';
import { useMediaQuery } from 'react-responsive';
import { Button } from "../Button/Button";
import { RSVPData } from '../../services/RSVP.service';
import { capitalizeFirstLetters } from "../../Globals";

type RSVPDetailProps = {
  onBackButtonClicked: () => void;
  onContinueButtonClicked: (reservationState: RSVPState) => void;
  rsvpData: RSVPData;
};

export type RSVPState = {
  [ key: string ]: boolean;
}

type RSVPNameProps = {
  name: string;
  onSelected: (state: RSVPState) => void;
};

enum SelectionState {
  None,
  Accepted,
  Declined
}

const RSVPName = (props: RSVPNameProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ selectedState, setSelectedState] = React.useState<SelectionState>(SelectionState.None);
  const [ acceptButtonSelectionStyle, setAcceptButtonSelectionStyle ] = React.useState({});
  const [ declineButtonSelectionStyle, setDeclineButtonSelectionStyle ] = React.useState({});
  const isMounted = React.useRef(false);

  const buttonStyle: React.CSSProperties = {
    height: isMobile ? "30px" : "60px",
    color: "#E6C2A9",
    backgroundColor: "#CB683F",
    fontFamily: "Curvilingus",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "100px" : "200px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "10px"
  };


  React.useEffect(() => {
    if (isMounted.current) {
      props.onSelected({[props.name]: selectedState === SelectionState.Accepted});
    }
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [ selectedState ]);

  React.useLayoutEffect(() => {
    if (selectedState === SelectionState.Accepted) {
      setAcceptButtonSelectionStyle({ backgroundColor: "#AE4A25" });
      setDeclineButtonSelectionStyle({ backgroundColor: "gray", opacity: .5 });
    } else if (selectedState === SelectionState.Declined) {
      setAcceptButtonSelectionStyle({ backgroundColor: "gray", opacity: .5 });
      setDeclineButtonSelectionStyle({ backgroundColor: "#AE4A25" });
    }
  }, [ selectedState ]);

  const acceptButtonClicked = () => {
    setSelectedState(SelectionState.Accepted);
  };

  const declineButtonClicked = () => {
    setSelectedState(SelectionState.Declined);
  };

  return (
    <div className='rsvp-detail-name-container' style={isMobile ? {flexDirection: "column"} : undefined}>
      <div className='rsvp-detail-name' style={isMobile ? {fontSize: "20px", width: "100%", textAlign: "center"} : undefined}>
        {capitalizeFirstLetters(props.name)}
      </div>
      <div className='rsvp-detail-button-container'>
        <Button
          style={{ ...buttonStyle, ...acceptButtonSelectionStyle }}
          title='Accept'
          onClick={acceptButtonClicked}
        />
        <Button
          style={{ ...buttonStyle, ...declineButtonSelectionStyle }}
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
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      if (Object.keys(reservationState).length === props.rsvpData.totalCount) {
        setIsContinueButtonDisabled(false);
      }
    }
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [ Object.keys(reservationState).length ]);

  const buttonStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "5px" : "10px",
    backgroundColor: "#AE4A25",
    color: "#E6C2A9",
    fontFamily: "Curvilingus",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "200px" : "400px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const goBackButtonClicked = () => {
    props.onBackButtonClicked();
  };

  const continueButtonClicked = () => {
    props.onContinueButtonClicked(reservationState);
  }

  const rsvpStateSelected = (rsvpState: RSVPState) => {
    setReservationState({ ...reservationState, ...rsvpState });
  };

  return (
    <>
      <div className='rsvp-detail-header-container'>
        <div className='rsvp-detail-title' style={isMobile ? {fontSize: "40px"} : undefined}>
          Wedding Day
        </div>
        <div className='rsvp-detail-date' style={isMobile ? {fontSize: "15px"} : undefined}>
          Saturday, November 5th 2022
        </div>
      </div>
      <div className='rsvp-detail-names-container' style={isMobile ? {marginTop: "25px", marginBottom: "25px"} : undefined}>
        <RSVPName name={props.rsvpData.name} onSelected={rsvpStateSelected}/>
        { props.rsvpData.alternateNames.map(alternate => {
          return <RSVPName key={alternate} name={alternate} onSelected={rsvpStateSelected}/>;
        })}
      </div>
      <Button 
        title='Continue' 
        disabled={isContinueButtonDisabled}
        style={buttonStyle} 
        onClick={continueButtonClicked}
      />
      <Button 
        title='Go Back'
        style={{ ...buttonStyle, marginTop: "20px", backgroundColor: "#CB683F" }} 
        onClick={goBackButtonClicked}
      />
    </>
  );
};