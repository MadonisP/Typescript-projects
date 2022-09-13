import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const Request = axios.create({
  baseURL: BASE_URL,
});
