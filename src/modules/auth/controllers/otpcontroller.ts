import { useState } from "react";
import { otpApi } from "src/@core/helpers/apis/auth.api";
import { verifyForgotEmailApi } from "src/@core/helpers/apis/auth.api";



export const useOTPController = () => {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sucessRegister, setSucessRegister] = useState<boolean>(false);

  const handleOTPSubmit = async (
    email: string,
    otp: string,
    pageType: string
  ) => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      let response;
      // API based on page type 
      if (pageType === "auth/signup") {
        response = await otpApi(email, otp);
        console.log("OTP submission successful:", response);
        setSucessRegister(true); // Set successRegister to true on successful OTP submission
      } else if (pageType === "auth/forgot-password") {
        response = await verifyForgotEmailApi(email, otp);
        console.log("OTP Forgot submission successful:", response);
        setSucessRegister(true); // Set successRegister to true on successful OTP submission
      } else {
        throw new Error("Invalid page type");
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
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
    setError(null);

    try {
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          clearInterval(interval);
          resolve("OTP sent successfully!");
        }, 1000);
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

  const resetSuccessRegister = () => {
    setSucessRegister(false);
  };

  return {
    loading,
    handleOTPSubmit,
    resendLoading,
    handleResendOTP,
    resendSuccess,
    sucessRegister,
    resetSuccessRegister,
    error,
  };
};
