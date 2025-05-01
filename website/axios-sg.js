import axios from "axios";

const instance = axios.create({
  baseURL: "https://in.decentro.tech/website",
});

export default instance;
