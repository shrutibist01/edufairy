import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const backendApi = axios.create({
  baseURL: API_BASE_URL,
});

export const getBackendMessage = () => backendApi.get("/your-endpoint/");

export default backendApi;
