import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 10000,
});