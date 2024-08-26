import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/Api.config";
import { LoginFormValues } from "../../types/authTypes";

const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Login
export const LOGIN = (data: LoginFormValues) => API.post("/api/login", data);