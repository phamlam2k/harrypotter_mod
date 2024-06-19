import { useForm } from "react-hook-form";

const useSignUpController = () => {
  const signUpForm = useForm({
    mode: "onSubmit",
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return {
    signUpForm,
    handleSubmit,
  };
};

export default useSignUpController;
