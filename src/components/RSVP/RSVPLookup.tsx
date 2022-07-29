import React from 'react';
import './RSVPLookup.css';
import { useMediaQuery } from 'react-responsive';
import { Button } from "../../components/Button/Button";
import { findRSVP, RSVPData } from "../../services/RSVP.service";
import { Loader } from "../../components/Loader/Loader";

type RSVPLookupProps = {
  onSuccess?: (rsvp: RSVPData) => void,
};

const ERROR_MSG: any = {
  UNKNOWN: "Oops! Something went wrong. Try again.",
  NOT_FOUND: "Your reservation was not found. Please make sure you entered your full name correctly.",
  TOO_MANY_ATTEMPTS: "It seems you are still having trouble finding your reservation. Please reach out to Dan or Chandler.",
  ALREADY_RSVP: "You have already RSVPed. If this was a mistake or you would like to change your reservation, please reach out to Dan or Chandler."
};

const ERROR_MAPPING: any = {
  100: ERROR_MSG.UNKNOWN, // bad request
  101: ERROR_MSG.UNKNOWN, // invalid parameter
  102: ERROR_MSG.NOT_FOUND, 
  103: ERROR_MSG.ALREADY_RSVP,
};

export const RSVPLookup = (props: RSVPLookupProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ isFindReservationDisabled, setIsFindReservationDisabled ] = React.useState(true);
  const [ reservationInputText, setReservationInputText ] = React.useState("");
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ errorMessage, setErrorMessage ] = React.useState("");
  const [ attempts, setAttempts ] = React.useState(0);
  const abortRef = React.useRef<AbortController | null>(null);

  const inputStyle: React.CSSProperties = {
    height: isMobile ? "20px" : "40px",
    borderRadius: isMobile ? "5px" : "10px",
    backgroundColor: "#E4B2BC",
    // color: "#E6C2A9",
    fontFamily: "Curvilingus",
    fontSize: isMobile ? "15px" : "30px",
    width: isMobile ? "250px" : "500px",
    marginTop: isMobile ? "20px" : "30px",
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    outline: "none",
  };

  const findReservationContainerStyle: React.CSSProperties = {
    // marginTop: isMobile ? "50px" : "100px",
    // marginBottom: isMobile ? "150px" : "300px",
  };

  const findReservationStyle: React.CSSProperties = {
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

  const inputOnChange = (event: any) => {
    const value = event.target.value;
    setIsFindReservationDisabled(!value);
    setReservationInputText(value);
  };

  const onKeyPress = (event: any) => {
    if (reservationInputText && (event.key === "Enter" || event.keyCode === 13)) {
      findReservation();
    }
  };

  const findReservationClicked = () => {
    findReservation();
  };

  const handleRSVPError = (errorCode: number): string => {
    return ERROR_MAPPING[errorCode] ?? ERROR_MSG.UNKNOWN;
  };

  React.useEffect(() => {
    if (attempts >= 3) {
      setErrorMessage(ERROR_MSG.TOO_MANY_ATTEMPTS);
    }
  }, [ attempts ]);

  const findReservation = async () => {
    setErrorMessage("");
    setIsLoading(true);

    if (abortRef.current) {
      abortRef.current.abort();
    }

    try {
      abortRef.current = new AbortController();
      const response = await findRSVP(reservationInputText, abortRef.current.signal);
      const { data } = response;
      setIsLoading(false);
      if (data?.errorCode) {
        abortRef.current = null;
        if (data.errorCode !== 103) { // already rsvp
          setAttempts(attempts+1);     
        }
        setErrorMessage(handleRSVPError(data.errorCode));
      } else {  // success
        setAttempts(0); // reset attempts
        setReservationInputText("");
        props.onSuccess && props.onSuccess(data);        
      }
    } catch (error: any) {
      console.log("RSVP ERROR", JSON.stringify(error));
      console.log("RSVP ERROR", JSON.stringify(error?.response));
      setIsLoading(false);
      abortRef.current = null;
      setAttempts(attempts+1);
      setErrorMessage(ERROR_MSG.UNKNOWN);
    }
  };

  return (
    <>
      <div className='rsvp-text' style={isMobile ? {fontSize: "15px", width: "80%"} : undefined}>
        If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
      </div>
      <input 
        placeholder='Full Name' 
        style={inputStyle} 
        onChange={inputOnChange}
        onKeyPress={onKeyPress}
      />
      <Button 
        disabled={isFindReservationDisabled}
        title={`Find your reservation`} 
        style={findReservationStyle} 
        containerStyle={findReservationContainerStyle}
        onClick={findReservationClicked}
        onMouseEnter={(setStyleState) => {
          setStyleState({...findReservationStyle, opacity: .5})
        }}
      />
      { errorMessage && <div>{ errorMessage }</div>}
      <Loader isLoading={isLoading}/>
    </>
  );
};
