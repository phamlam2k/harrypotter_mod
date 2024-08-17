import { useState } from "react";
import { changePasswordApi } from "src/@core/helpers/apis/auth.api";

export const useChangePasswordController = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validatePasswords = (): boolean => {
    if (!newPassword) {
      setError("New Password is required.");
      return false;
    }
    if (!confirmPassword) {
      setError("Confirm Password is required.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError(null); // Clear error if all validations pass
    return true;
  };

  const handleChangePassword = async (email: string, confirmPassword: string): Promise<boolean> => {
    if (!validatePasswords()) {
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      // API call to change the password
      const response = await changePasswordApi(email, confirmPassword);
      console.log("Password changed successfully for:", response);
      return true; // Indicate success
      
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Use the error message from the response if available
      } else {
        setError("Failed to change the password. Please try again.");
      }
      return false; // Indicate failure
    } finally {
      setLoading(false);
    }
  };

  return {
    newPassword,
    confirmPassword,
    error,
    loading,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
  };
};
