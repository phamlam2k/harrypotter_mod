import { useForm } from "react-hook-form";
import { loginApi } from "src/@core/helpers/apis/auth.api"; // Import only necessary functions
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface for the form inputs
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

  // Function to open the OAuth popup window
  const openAuthPopup = (
    url: string,
    windowName: string,
    width = 500,
    height = 600
  ) => {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    return window.open(
      url,
      windowName,
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setApiError(null);

    const authPopup = openAuthPopup(
      "http://localhost:6061/v1/api/auth/google",
      "GoogleAuth"
    );

    const checkPopup = setInterval(() => {
      if (authPopup?.closed) {
        clearInterval(checkPopup);
        setLoading(false);

        const success = localStorage.getItem("oauthSuccess"); // Example mechanism
        const token = localStorage.getItem("accessToken"); // Example mechanism

        if (success) {
          localStorage.removeItem("oauthSuccess");
          localStorage.removeItem("accessToken");

          if (token) {
            localStorage.setItem("accessToken", token);
            navigate("/");
          } else {
            setApiError("Failed to retrieve token");
          }
        } else {
          setApiError("Authentication failed or canceled");
        }
      }
    }, 500);
  };

  const handleSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;

    setLoading(true);
    setApiError(null);

    try {
      const response = await loginApi(email, password);

      console.log("Login successful:", response);
      localStorage.setItem("accessToken", response.data.accessToken);

      // Navigate to the home page upon successful login
      navigate("/");
    } catch (error) {
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
    handleGoogleLogin,
    apiError,
    loading,
  };
};

export default useLoginController;
