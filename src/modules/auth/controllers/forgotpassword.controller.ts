import { useForm } from "react-hook-form";

const useForgotPasswordController = () => {
 const forgotPasswordForm = useForm();

 const handleSubmit = async (data: any) => {
   console.log("Reset Password Data:", data);

 };

 return {
   forgotPasswordForm,
   handleSubmit,
 };
};

export default useForgotPasswordController;
