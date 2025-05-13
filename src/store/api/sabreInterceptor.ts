import axios from "axios";
import { SABREAPI } from "./sabreApi";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// Function to notify all subscribers with the new token
const onRefreshed = (token: string) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

// Function to add a request to the queue of subscribers awaiting a token refresh
const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

// Attach request and response interceptors to the Axios instance
export const setupInterceptors = () => {
    SABREAPI.interceptors.request.use(
        (config) => {
            // const accessToken = localStorage.getItem("sabreAccessToken")
            // if (accessToken) {
            //     config.headers.Authorization = `Bearer ${accessToken}`;
            // }
            config.headers.Authorization = `Bearer T1RLAQIJAs3M1FEcOUzNkmIgPmtm7qYCK2lr2u9DJBBmcPYvbRATEHYO+4rRcXfyTEf0ArtzAADQc5Z8sKYcEDJEXLT5V2SQekOaRS0orO5dattuUWdxJ3wR0xcyF058oz2zMapwSkzBBITms71pume0Fa2LSwG3aRRy6VkEIQyE7n5mkjUs3hQUymNyVahYleGi288vgd8BuH9edeEy2bPGhMnt7scZJeK17ttr/RtKgrrQVNtql4jrC9k7kgWQYGjZrE3gZxTzgz9Z1pkRqhqGBYDFwDSMMntI4VwSWQLqdZiqmFUsqY75u08zZQHnwHaeBNFDN0EvtdarkWd3q8/v5KESeWETIg**`;
            
            return config;
        },
        (error) => Promise.reject(error)
    );

    // SABREAPI.interceptors.response.use(
    //     (response) => response, // Return the response directly if no error
    //     // async (error) => {
    //     //     const { config, response } = error;
    //     //     const originalRequest = config;

    //     //     console.log({response})
    //     //     // Check if error is 401 due to an expired token and retry flag is not set
    //     //     // if (response?.status === 401 && !originalRequest._retry) {
    //     //         // const errorMessage = response.data?.message || '';
    //     //         // console.log("here=============>")
    //     //         // if (errorMessage === "Authentication failed due to invalid credentials" || response?.status === 401) {
    //     //             // Token has expired, we need to refresh
        
    //     //             // if (isRefreshing) {
    //     //             //     // Queue the request if token is already being refreshed
    //     //             //     return new Promise((resolve, reject) => {
    //     //             //         addRefreshSubscriber((token: string) => {
    //     //             //             originalRequest.headers.Authorization = `Bearer ${token}`;
    //     //             //             resolve(SABREAPI(originalRequest));
    //     //             //         });
    //     //             //     });
    //     //             // }

    //     //             // Set retry flag to avoid looping
    //     //             // const sabreConfig = {
    //     //             //     headers: {  Authorization: "Basic VmpFNk56WXdOamsxT2pKWlJFdzZRVUU9OlRXOXVhWEkwTlRnPQ==", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" }
    //     //             // };
    //     //             // const refreshResponse = await axios.post(`https://api.platform.sabre.com/v2/auth/token`, { grant_type:"client_credentials" },sabreConfig);
    //     //             // const { access_token,  } = refreshResponse.data.data;
    //     //             // localStorage.setItem("sabreAccessToken", access_token);

    //     //             // originalRequest._retry = true;
    //     //             // isRefreshing = true;

    //     //             try {
    //     //                 // Check for refresh token in cookies or localStorage as a fallback
    //     //                 // const refreshToken = localStorage.getItem("sabreAccessToken");

    //     //                 // if (!refreshToken) {
    //     //                 //     throw new Error("No refresh token available");
    //     //                 // }

    //     //                 // Call the refresh token API
    //     //                 // const sabreConfig = {
    //     //                 //     headers: {  Authorization: "Basic VmpFNk56WXdOamsxT2pKWlJFdzZRVUU9OlRXOXVhWEkwTlRnPQ==", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" }
    //     //                 // };
    //     //                 // const refreshResponse = await axios.post(`${SABREAPI}/v2/auth/token`, { grant_type:"client_credentials" },sabreConfig);
    //     //                 // const { access_token,  } = refreshResponse.data.data;
    //     //                 // console.log({refreshResponse})
    //     //                 // if (access_token) {
    //     //                     // Store new tokens in localStorage if needed
    //     //                     // console.log("this scope is triggered")
    //     //                     // localStorage.setItem("sabreAccessToken", access_token);
    //     //                     // if (access_token) {
    //     //                     //     localStorage.setItem("sabreRefreshToken", access_token);
    //     //                     // }

    //     //                     // Notify all queued requests with the new token
    //     //                     // onRefreshed(access_token);
    //     //                     // isRefreshing = false;

    //     //                     // Retry original request with the new token
    //     //                     // originalRequest.headers.Authorization = `Bearer ${access_token}`;
    //     //                     // return SABREAPI(originalRequest);
    //     //                 // }
    //     //             } catch (err: any) {
    //     //                 // isRefreshing = false;

    //     //                 // If the refresh token has expired or is invalid
    //     //                 // if (err.response?.data?.message === "Authentication failed due to invalid credentials") {
    //     //                 //     localStorage.removeItem("sabreAccessToken");
    //     //                 //     localStorage.removeItem("sabreRefreshToken");
    //     //                 //     const sabreConfig = {
    //     //                 //         headers: { Authorization: "Basic VmpFNk56WXdOamsxT2pKWlJFdzZRVUU9OlRXOXVhWEkwTlRnPQ==" }
    //     //                 //     };
    //     //                 //     const refreshResponse = await axios.post("v2/auth/token", { grant_type:"client_credentials" },sabreConfig);
    //     //                 //     const { access_token,  } = refreshResponse.data.data;
    //     //                 //     if (access_token) {
    //     //                 //         localStorage.setItem("sabreRefreshToken", access_token);
    //     //                 //     }
    //     //                 // }

    //     //                 return Promise.reject(err);
    //     //             }
    //     //         }
    //     //     }
    //         // Reject the error if it's not a token expiration issue
    //         return Promise.reject(error);
    //     }
    // );
};