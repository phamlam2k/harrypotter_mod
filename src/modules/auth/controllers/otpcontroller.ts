import { useState } from "react";
import { otpApi } from "src/@core/helpers/apis/auth.api";

export const useOTPController = () => {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state
  const [sucessRegister, setSucessRegister] = useState<boolean>(false); // Corrected type

  const handleOTPSubmit = async (email: string, otp: string) => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await otpApi(email, otp);
      console.log("OTP submission successful:", response);
      setSucessRegister(true); // Set successRegister to true on successful OTP submission
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // If the API returns an error message, set it
        setError(error.response.data.message);
      } else {
        // Generic error message
        setError("OTP submission failed. Please try again.");
      }
      console.error("OTP submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    setError(null); // Clear previous errors

    try {
      // Simulate an API call with a 2-second delay using setInterval
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          clearInterval(interval);

          // Simulate a successful API response
          resolve("OTP sent successfully!");
        }, 1000); // Delay of 2 seconds
      });

      setResendSuccess(true);
      console.log("OTP resent successfully");
    } catch (error: any) {
      setError("Resend OTP failed. Please try again.");
      console.error("Resend OTP failed", error);
    } finally {
      setResendLoading(false);
    }
  };

  // Function to reset the successRegister state
  const resetSuccessRegister = () => {
    setSucessRegister(false);
  };

  return {
    loading,
    handleOTPSubmit,
    resendLoading,
    handleResendOTP,
    resendSuccess,
    sucessRegister, // Return sucessRegister state
    resetSuccessRegister, // Return the reset function
    error, // Return the error state
  };
};
