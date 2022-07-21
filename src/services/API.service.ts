import { apiInstance } from "./Axios.service";

export const findRSVP = async (name: string): Promise<any> => {
  return apiInstance.get("/rsvps/", { params: { name }});
};