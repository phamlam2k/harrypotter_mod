import axiosInstance from "src/@core/axios/https";

export const loginApi = async (email: string, password: string) => {
  const response = await axiosInstance.post("/auth/login", { email, password });

  console.log(response);
  return response.data;
};
