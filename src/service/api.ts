import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.4.32:3333",
});
