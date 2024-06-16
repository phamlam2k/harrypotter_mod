import { useForm } from "react-hook-form";

const useLoginController = () => {
  const loginForm = useForm({
    mode: "onSubmit",
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return {
    loginForm,
    handleSubmit,
  };
};

export default useLoginController;
