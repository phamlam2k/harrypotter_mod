import axios from "axios";

// export const baseURL = process.env.PUBLIC_URL
export const baseURL = "http://localhost:6061";

const axiosInstance = axios.create({ baseURL: baseURL, withCredentials: false });


// Add a request interceptor for authentication
axiosInstance.interceptors.request.use(
  (config: any) => config,
  (error: any) => Promise.reject(error)
);

// Add a response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response: any) => {
    if (response.data.code === 404) {
      return Promise.reject(response);
    }

    return response;
  },
  (error: any) => {
    if (error.response) {
      if (error.response.status === 401) {
      } else if (error.response.status === 500) {
      } else if (error.response.status === 404) {
        // window.location.href = '/404'
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
