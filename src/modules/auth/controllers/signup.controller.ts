import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "src/@core/axios/https";

interface SignUpFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const useSignUpController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormInputs>({
    mode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post("/auth/register", data);
      console.log(response)
      setSuccess(true);
      console.log("Registration successful:", response.data);
    } catch (error: any) {
      setError(error.response?.data?.message || "Registration failed");
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    getValues,
    loading,
    error,
    success,
  };
};

export default useSignUpController;
