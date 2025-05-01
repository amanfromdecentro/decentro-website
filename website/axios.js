import axios from "axios";

const instance = axios.create({
  baseURL: "https://decentro-in.in.ngrok.io",
});

export default instance;
