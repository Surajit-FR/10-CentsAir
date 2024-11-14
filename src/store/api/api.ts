import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/Api.config";
import {
    LoginFormValues,
    SignUpFormValues,
    TSocialLoginValues
} from "../../types/authTypes";
import { setupInterceptors } from "./interceptor";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL, withCredentials: true });

// Set up interceptors
setupInterceptors();

// Sign up
export const SIGNUP = (data: SignUpFormValues) => API.post("/auth/signup", data);
// Social login
export const SOCIALLOGIN = (data: TSocialLoginValues) => API.post("/auth/user/social", data);
// Login
export const LOGIN = (data: LoginFormValues) => API.post("/auth/login", data);
// Logout
export const LOGOUT = () => API.post("/auth/logout");
