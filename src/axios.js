import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000"
});
export const apiURL = axios.create({
  baseURL: "https://api.rebrandly.com/v1/links"
});

