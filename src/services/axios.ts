import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: import.meta.env.VITE_AUTH_KEY,
  },
});
