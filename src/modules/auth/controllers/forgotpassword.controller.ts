import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkForgotEmailApi } from "src/@core/helpers/apis/auth.api";

// Define the structure of the form values
interface ForgotPasswordFormValues {
  email: string;
}

const useForgotPasswordController = () => {
  const forgotPasswordForm = useForm<ForgotPasswordFormValues>();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [otpTriggered, setOtpTriggered] = useState<boolean>(false);

  // Define the correct type for the handleSubmit function
  const handleSubmit: SubmitHandler<ForgotPasswordFormValues> = async (
    data
  ) => {
    setLoading(true);
    setApiError(null);
    setOtpTriggered(false);

    try {
      // Call the API function
      await checkForgotEmailApi(data.email);
      console.log("Email exists, sending OTP...", data);

      // Trigger OTP component display
      setOtpTriggered(true);
    } catch (error: any) {
      // Extract and set the API error message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setApiError(error.response.data.message);
      } else {
        setApiError("Failed to process your request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    forgotPasswordForm,
    handleSubmit,
    loading,
    apiError,
    otpTriggered,
    setOtpTriggered,
  };
};

export default useForgotPasswordController;
