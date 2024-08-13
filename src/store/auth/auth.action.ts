import { loginApi } from "src/@core/helpers/apis/auth.api";
import {
  ILoginProps,
  IStateAuthActions,
  IStateAuth,
  SetState,
} from "./auth.type";
import { AxiosError } from "axios";

export const actions = (
  set: SetState<IStateAuth>
): Partial<IStateAuthActions> => ({
  login: async (data: ILoginProps) => {
    set((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      // Call the login API and get the response
      const response = await loginApi(data.email, data.password);

      // Handle the response
      console.log("Login successful:", response);
    } catch (error) {
      // Check if the error is an AxiosError
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Login failed";
        console.error("Axios error during login:", errorMessage);
      } else {
        console.error("Unexpected error during login:", error);
      }
    } finally {
      set((state) => ({
        ...state,
        isLoading: false,
      }));
    }
  },
});
