import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ForgotPasswordFormValues {
  email: string;
}

const useForgotPasswordController = () => {
  const forgotPasswordForm = useForm<ForgotPasswordFormValues>();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Define the correct type for the handleSubmit function
  const handleSubmit: SubmitHandler<ForgotPasswordFormValues> = async (
    data
  ) => {
    setLoading(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      // Simulate an API call to reset the password
      console.log("Reset Password Data:", data);

      // Simulate successful response
      setSuccessMessage(
        "A temporary password has been sent to your email address."
      );
    } catch (error: any) {
      setApiError("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    forgotPasswordForm,
    handleSubmit,
    loading,
    apiError,
    successMessage,
  };
};

export default useForgotPasswordController;
