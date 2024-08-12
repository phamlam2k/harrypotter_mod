import React from "react";
import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
} from "@mui/material";
import useForgotPasswordController from "../controllers/forgotpassword.controller";

const ForgotPasswordTemplate = () => {
  const { forgotPasswordForm, handleSubmit, apiError, successMessage, loading } = useForgotPasswordController();

  const getErrorMessage = (error: any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return undefined;
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
      {successMessage && (
        <Box mb={3} px={2}>
          <Typography 
            color="#2e7d32" 
            variant="body2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "0.875rem",
              textAlign: "left",
              backgroundColor: "#e8f5e9",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            • {successMessage}
          </Typography>
        </Box>
      )}
      <Typography variant="body2" align="center" marginBottom="16px">
        Enter your email address below and we'll send you a temporary password.
      </Typography>
      <form
        onSubmit={forgotPasswordForm.handleSubmit(handleSubmit)}
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
    </div>
  );
};

export default ForgotPasswordTemplate;
