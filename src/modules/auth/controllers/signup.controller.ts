import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupApi } from "src/@core/helpers/apis/auth.api";

interface SignUpFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
}

const useSignUpController = () => {
  // Setup react-hook-form

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormInputs>({
    mode: "onSubmit",
  });

  // State management
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [emailuser, setEmail] = useState(""); 
  // onSubmit handler
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Debug: Log the form data to ensure everything is correct
      setEmail(data.email)

      // Make API request to sign up the user
      const response = await signupApi(
        data.username,
        data.email,
        data.password
      );

      // If the sign-up is successful, log the response and update state
      console.log("Registration successful:", response.data.email);
      setSuccess(true);
    } catch (error: any) {
      // Handle errors, log them for debugging
      setError(error.response?.data?.message || "Registration failed");
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  // Return necessary methods and state for use in the component
  return {
    register,
    handleSubmit: handleSubmit(onSubmit), // Ensure the handleSubmit is passed correctly
    errors,
    getValues,
    loading,
    error,
    success,
    emailuser,
  };
};

export default useSignUpController;
