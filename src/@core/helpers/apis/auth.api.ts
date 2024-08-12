import axiosInstance from "src/@core/axios/https";
import { LOGIN_API } from "src/@core/libs/constants/endpointAPI";

export const loginApi = async (email: string, password: string) => {
  const response = await axiosInstance.post(LOGIN_API, { email, password });

  return response.data;
};


export const signupApi = async (email: string, password: string) => {
  const response = await axiosInstance.post(LOGIN_API, { email, password });

  return response.data;
};


