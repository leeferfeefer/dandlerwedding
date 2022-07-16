import { mongoInstance } from "./Axios.service";

export const findRSVP = async (name: string, signal?: AbortSignal): Promise<any> => {
  return mongoInstance.get("/endpoint/findRSVP", { 
    signal,
    params: { name }
  });
};

export default {
  findRSVP,
}

