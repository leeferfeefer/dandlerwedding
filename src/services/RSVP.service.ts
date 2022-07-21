import { mongoInstance } from "./Axios.service";

export type RSVPData = {
  alternateNames: string[],
  name: string,
  rsvpCount: number,
  totalCount: number,
  _id: string,
  rsvp: {
    [key: string]: boolean,
  }
};

export const findRSVP = async (name: string, signal?: AbortSignal): Promise<any> => {
  return mongoInstance.get("/endpoint/findRSVP", { 
    signal,
    params: { name: name.toLowerCase() }
  });
};

export default {
  findRSVP,
}

