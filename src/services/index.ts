import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_HTTP;

export const api = axios.create({
    baseURL: baseUrl,
});
