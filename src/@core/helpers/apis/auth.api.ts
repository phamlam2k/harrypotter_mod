import axiosInstance from "src/@core/axios/https";
import { CHANGE_FORGOT_PASSWORD_API, CHECK_FORGOT_EMAIL_API, GOOGLE_LOGIN_API, LOGIN_API, OTP_API, REGISTER_API, VERIY_FORGOT_EMAIL_API } from "src/@core/libs/constants/endpointAPI";


export const loginApi = async (email: string, password: string) => {
  const response = await axiosInstance.post(LOGIN_API, { email, password });

  return response.data;
};


export const signupApi = async (fullname: string , email: string, password: string) => {
  const response = await axiosInstance.post(REGISTER_API, { fullname , email, password });

  return response.data;
};

export const otpApi = async (email: string, otp: string) => {
  const response = await axiosInstance.post(OTP_API, { email , otp
});
 return response.data;
};


export const checkForgotEmailApi = async (email: string) => {
  const response = await axiosInstance.post(CHECK_FORGOT_EMAIL_API, { email });
  return response.data;
};


export const verifyForgotEmailApi = async (email: string, otp: string) => {
  const response = await axiosInstance.post(VERIY_FORGOT_EMAIL_API, { email, otp });
  return response.data;
};

export const googleLoginApi = async (googleToken: string) => {
    const response = await axiosInstance.post(GOOGLE_LOGIN_API, {
      token: googleToken,
    });
    return response.data;
};

export const changePasswordApi = async (email: string, password: string) => {
  const response = await axiosInstance.post(CHANGE_FORGOT_PASSWORD_API, {  email, password });
  return response.data;
};







