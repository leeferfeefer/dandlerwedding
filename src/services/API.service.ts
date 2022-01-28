import { apiInstance } from "./Axios.service";

export const getRSVPs = async (): Promise<any> => {
    return apiInstance.get("/rsvps");
};