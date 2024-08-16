import { useForm } from "react-hook-form";
import { loginApi } from "src/@core/helpers/apis/auth.api";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// khai bao inteerface cho logininput
interface LoginFormInputs {
  email: string;
  password: string;
}

const useLoginController = () => {
  const loginForm = useForm<LoginFormInputs>({
    mode: "onSubmit",
  });

  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;

    setLoading(true);
    setApiError(null);

    try {
      // Call the login API and get the response
      const response = await loginApi(email, password);

      // Handle the response
      console.log("Login successful:", response);

      // Navigate to the home page upon successful login
      navigate("/");
    } catch (error) {
      // Check if the error is an AxiosError
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Login failed";
        setApiError(errorMessage);
        console.error("Axios error during login:", errorMessage);
      } else {
        setApiError("Unexpected error during login");
        console.error("Unexpected error during login:", error);
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return {
    loginForm,
    handleSubmit: loginForm.handleSubmit(handleSubmit),
    apiError,
    loading,
  };
};

export default useLoginController;
