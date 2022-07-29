import axios from "axios";

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 10000,
});

export const mongoInstance = axios.create({
  baseURL: 'https://eastus2.azure.data.mongodb-api.com/app/dandlerwedding-tlicw',
  timeout: 10000,
  headers: {
    "api-key": `${ process.env.REACT_APP_API_KEY }`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});