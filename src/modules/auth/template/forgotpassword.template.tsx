import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  CircularProgress,
  Dialog,
} from "@mui/material";
import useForgotPasswordController from "../controllers/forgotpassword.controller";
import OTPInput from "./opt.template";

const ForgotPasswordTemplate = () => {
  const { forgotPasswordForm, handleSubmit, apiError, loading, otpTriggered , setOtpTriggered } = useForgotPasswordController();
  const [email, setEmail] = useState(""); // State to store the email for OTP verification

  const getErrorMessage = (error: any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return undefined;
  };

  const handleFormSubmit = async (data: any) => {
    setEmail(data.email);
    await handleSubmit(data);
  };

  return (
    <div style={{ width: "100%", padding: "0px" }}>
      {apiError && (
        <Box mb={3} px={2}>
          <Typography 
            color="#d32f2f" 
            variant="body2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "0.875rem",
              textAlign: "left",
              backgroundColor: "#fddcdc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            • {apiError}
          </Typography>
        </Box>
      )}

      <Typography variant="body2" align="center" marginBottom="16px">
        Enter your email address below and we'll send you a temporary password.
      </Typography>
      <form
        onSubmit={forgotPasswordForm.handleSubmit(handleFormSubmit)}
        noValidate
        style={{ width: "100%" }}
      >
        <TextField
          id="email"
          label="Email address"
          variant="outlined"
          fullWidth
          margin="normal"
          {...forgotPasswordForm.register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!forgotPasswordForm.formState.errors.email}
          helperText={getErrorMessage(forgotPasswordForm.formState.errors.email)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#6200ea",
            "&:hover": { backgroundColor: "#3700b3" },
          }}
          disabled={loading} // Disable button while loading
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null} // Show spinner
        >
          {loading ? "Sending..." : "Reset Password"}
        </Button>
        <Link
          href="/auth/login"
          variant="body2"
          align="right"
          display="block"
          mt={2}
          sx={{ textDecoration: "none", color: "purple" }}
        >
          Back to Login
        </Link>
      </form>

      {/* OTP Verification Dialog */}
      <Dialog open={otpTriggered} onClose={() => setOtpTriggered(false)}>
        <OTPInput
          email={email} // Pass the email to OTPInput component
          onClose={() => setOtpTriggered(false)}
          onSuccessRegister={() => setOtpTriggered(false)} // Handle success in parent
          onResetSuccessRegister={() => setOtpTriggered(false)} // Handle reset in parent
        />
      </Dialog>
    </div>
  );
};

export default ForgotPasswordTemplate;
