import React from 'react';
import axios from "axios";

export const Test = () => {
  const buttonClicked = async () => {
    console.log("Reading from API...");
    try {
      const response = await axios.get("http://localhost:3001/api/gallery");
      console.log("response: ", response);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }
  return (
    <div>
      Test Component
      <div onClick={buttonClicked}>
        button
      </div>
    </div>
  )
};