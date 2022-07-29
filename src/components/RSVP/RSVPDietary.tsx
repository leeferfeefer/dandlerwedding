import React from 'react';
import './RSVPDietary.css';
import { useMediaQuery } from 'react-responsive';
import { RSVPData } from '../../services/RSVP.service';
import { Button } from '../Button/Button';
import { capitalizeFirstLetters } from '../../Globals';
import { updateRSVP } from "../../services/RSVP.service";
import { Loader } from "../../components/Loader/Loader";

const ERROR_MSG: any = {
  UNKNOWN: "Oops! Something went wrong. Try again.",
  TOO_MANY_ATTEMPTS: "It seems you are still having trouble finding your reservation. Please reach out to Dan or Chandler.",
};

const ERROR_MAPPING: any = {
  100: ERROR_MSG.UNKNOWN, // bad request
  101: ERROR_MSG.UNKNOWN, // invalid parameter
  102: ERROR_MSG.NOT_FOUND,
};

type RSVPDietaryProps = {
  rsvpData: RSVPData;
  onBackButtonClicked: () => void;
  onSuccess: () => void;
};

export type DietaryRestrictions = {
  [key: string]: string;
}

export const RSVPDietary = (props: RSVPDietaryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [ dietaryRestrictions, setDietaryRestrictions ] = React.useState<DietaryRestrictions>({});
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ errorMessage, setErrorMessage ] = React.useState("");
  const [ attempts, setAttempts ] = React.useState(0);
  const abortRef = React.useRef<AbortController | null>(null);

  const buttonStyle: React.CSSProperties = {
    height: isMobile ? "40px" : "80px",
    borderRadius: isMobile ? "5px" : "10px",
    backgroundColor: "#CB683F",
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

  const handleRSVPError = (errorCode: number): string => {
    return ERROR_MAPPING[errorCode] ?? ERROR_MSG.UNKNOWN;
  };

  React.useEffect(() => {
    if (attempts >= 3) {
      setErrorMessage(ERROR_MSG.TOO_MANY_ATTEMPTS);
    }
  }, [ attempts ]);

  const submitButtonClicked = async () => {
    setErrorMessage("");
    setIsLoading(true);

    if (abortRef.current) {
      abortRef.current.abort();
    }

    try {
      abortRef.current = new AbortController();
      const updatedRSVPData = { ...props.rsvpData, dietary: dietaryRestrictions, rsvpCount: props.rsvpData.totalCount};
      const response = await updateRSVP(updatedRSVPData);
      const { data } = response;
      setIsLoading(false);
      if (data?.errorCode) {
        abortRef.current = null;
        setAttempts(attempts+1);        
        setErrorMessage(handleRSVPError(data.errorCode));
      } else {  // success
        setAttempts(0); // reset attempts
        props.onSuccess();
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

  const onInputChange = (event: any, name: string) => {
    const value = event.target.value;
    setDietaryRestrictions({...dietaryRestrictions, [name]: value})
  };

  return (
    <div className='rsvp-dietary-container'>
      <div className='rsvp-dietary-header' style={{marginBottom: isMobile ? "20px": "40px"}}>
        Any dietary restrictions?
      </div>
      <div className='rsvp-dietary-names-container'>
        <div className='rsvp-dietary-name-container'>
          <div className='rsvp-dietary-name'>
            {capitalizeFirstLetters(props.rsvpData.name)}
          </div>
          <textarea className='rsvp-dietary-input' onChange={(e) => onInputChange(e, props.rsvpData.name)}/>  
        </div>
        {props.rsvpData.alternateNames.map(altName => (
          <div key={altName} className='rsvp-dietary-name-container'>
            <div className='rsvp-dietary-name'>
              {capitalizeFirstLetters(altName)}
            </div>
            <textarea className='rsvp-dietary-input' onChange={(e) => onInputChange(e, altName)}/>  
          </div>
        ))}
      </div>
      <Button 
        title='Submit' 
        style={buttonStyle} 
        onClick={submitButtonClicked}
        onMouseEnter={(setStyleState) => {
          setStyleState({...buttonStyle, opacity: .5})
        }}
      />
      <Button 
        title='Go Back'
        style={{ ...buttonStyle, marginTop: "20px" }} 
        onClick={goBackButtonClicked}
        onMouseEnter={(setStyleState) => {
          setStyleState({...buttonStyle, opacity: .5, marginTop: "20px" })
        }}
      />
      { errorMessage && <div>{ errorMessage }</div>}
      <Loader isLoading={isLoading}/>
    </div>
  );
}