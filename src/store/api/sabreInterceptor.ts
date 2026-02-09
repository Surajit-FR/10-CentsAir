import axios from "axios";
import { GETACCESSTOKEN, SABREAPI } from "./sabreApi";

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
            const accessToken = localStorage.getItem("sabreAccessToken")
            // if (accessToken) {
                config.headers.Authorization = `Bearer T1RLAQJWECC88vdpTCCOCyPe6OEA156HHOYDQIOfpKfFRI1yGxDx74172AVckPYHAPPN+VQDAADggNedpLC5lbWdtWIO2wYbvSiRpJVSqqpJXAgXbhcLD73pDwphywTBvMOBFn0YgSJgADOLqPcGsm/I7OszM0zswqD3xeHS2nOJ0kV7gZogA7PmcjpUKAnQy63tYzJdHXfMX3QV2/wmItEBJp1wA4qjQELg3Vd4RKasGQ7d4yoIIdXKSn5jLWwOAJvJazyW9xVMyk1G/mcVoBVHklx3tAgU1nhej7XYrzXoeWZWMT3+tC2QqPS4gZutYM/QPLttGr//SKFRt/Ez0TnUaYF2BYgWY1yc+ix2wq/aq40hDq1NSMc*`;
            // }
            // config.headers.Authorization = `Bearer ${accessToken}`;

            return config;
        },
        (error) => Promise.reject(error)
    );
    SABREAPI.interceptors.response.use((response) => response,
        async (error) => {
            // const { config, response } = error
            // const originalRequest = config

            // if ((response?.status === 401 || response.type === "Validation")) {
            //     const errorMessage = response.data?.message || ''
            //     localStorage.removeItem("sabreAccessToken")
            //     console.log("errorMessage", errorMessage)
            //     if (errorMessage === "Authentication failed due to invalid credentials" || response?.status === 401) {
            //         console.log("token has expired")
            //         if (isRefreshing) {
            //             // Queue the request if token is already being refreshed
            //             return new Promise((resolve, reject) => {
            //                 addRefreshSubscriber((token: string) => {
            //                     originalRequest.headers.Authorization = `Bearer ${token}`;
            //                     resolve(SABREAPI(originalRequest));
            //                 });
            //             });
            //         }

                    // Set retry flag to avoid looping
            //         originalRequest._retry = true;
            //         isRefreshing = true;

            //         try {
            //             const refreshResponse = await axios({
            //                 url: 'https://api.platform.sabre.com/v2/auth/token',
            //                 method: 'post',
            //                 headers: { Authorization: 'Basic VmpFNk56WXdOamsxT2pKWlJFdzZRVUU9OlRXOXVhWEl4TkRVPQ==', "Content-Type": 'application/x-www-form-urlencoded' },
            //                 data: { grant_type: 'client_credentials' }
            //             })
            //             const { access_token } = refreshResponse.data?.data
            //             if (access_token) {
            //                 localStorage.setItem("sabreAccessToken", access_token)
            //                 // Notify all queued requests with the new token
            //                 onRefreshed(access_token);
            //                 isRefreshing = false;

            //                 // Retry original request with the new token
            //                 originalRequest.headers.Authorization = `Bearer ${access_token}`;
            //                 return SABREAPI(originalRequest);
            //             }
            //         }
            //         catch (err: any) {
            //             isRefreshing = false;
            //             // If the refresh token has expired or is invalid
            //             if (err.response?.data?.message === "Authentication failed due to invalid credentials") {
            //                 localStorage.removeItem("sabreAccessToken");
            //             }

            //             return Promise.reject(err);
            //         }
            //     }
            // }
            // Reject the error if it's not a token expiration issue
            return Promise.reject(error);
        })

};