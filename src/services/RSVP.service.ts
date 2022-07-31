import { apiInstance } from "./Axios.service";

export type RSVPData = {
  alternateNames: string[],
  name: string,
  rsvpCount: number,
  totalCount: number,
  _id: string,
  rsvp: {
    [key: string]: boolean,
  },
  dietary: {
    [key: string]: string,
  }
};

export const findRSVP = async (name: string, signal?: AbortSignal): Promise<any> => {
  return apiInstance.get("/rsvpLookup", { 
    signal,
    params: { name: name.toLowerCase() }
  });
};

export const updateRSVP = async (rsvpData: RSVPData, signal?: AbortSignal): Promise<any> => {
  return apiInstance.post("/rsvpUpdate", rsvpData, {
    signal,
  });
};

export default {
  findRSVP,
}

