import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  Dialog,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useSignUpController from "../controllers/signup.controller";
import OTPInput from "./opt.template";
import SuccessPopupRegister from "./sucesspopregister.template";

const SignUpTemplate = () => {
  const { register, handleSubmit, errors, getValues, loading, error, success, emailuser } = useSignUpController();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [email, setEmail] = useState(""); // State to store email
  const [isRegistered, setIsRegistered] = useState(false); // State to track if registration is successful

  const getErrorMessage = (error: any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return undefined;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleOtpSuccessRegister = () => {
    setIsRegistered(true); // Update state to reflect successful registration
    setOtpModalOpen(false); // Close the OTP modal
  };

  const handleOtpResetSuccessRegister = () => {
    setIsRegistered(false); // Reset registration success state
  };

  const onSubmit = (data: any) => {
    handleSubmit(data); // Pass data to handleSubmit
  };

  useEffect(() => {
    if (success && emailuser) {
      setEmail(emailuser); // Capture email in state
      setOtpModalOpen(true); // Open the OTP modal
    }
  }, [success, emailuser]);

  return (
    <Box>
      <form onSubmit={onSubmit} noValidate style={{ width: "100%" }}>
        {error && (
          <Box mb={1} px={2}>
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
              • {error}
            </Typography>
          </Box>
        )}
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
          })}
          error={!!errors.username}
          helperText={getErrorMessage(errors.username)}
        />
        <TextField
          id="email"
          label="Email address"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={getErrorMessage(errors.email)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            maxLength: {
              value: 12,
              message: "Password must be no more than 12 characters long",
            },
          })}
          error={!!errors.password}
          helperText={getErrorMessage(errors.password)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value: any) =>
              value === getValues("password") || "Passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={getErrorMessage(errors.confirmPassword)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControl error={!!errors.terms} sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox name="terms" color="primary" />}
            label="I agree to the terms and conditions"
            {...register("terms", {
              required: "You must agree to the terms and conditions",
            })}
          />
          <FormHelperText>{getErrorMessage(errors.terms)}</FormHelperText>
        </FormControl>

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
          {loading ? "Signing Up..." : "SIGN UP"}
        </Button>
      </form>

      <Dialog open={otpModalOpen}>
        <OTPInput
          email={email} // Pass the email to OTPInput component
          onClose={() => setOtpModalOpen(false)}
          onSuccessRegister={handleOtpSuccessRegister} // Handle success in parent
          onResetSuccessRegister={handleOtpResetSuccessRegister} // Handle reset in parent
        />
      </Dialog>

      <SuccessPopupRegister
        open={isRegistered}
        onClose={handleOtpResetSuccessRegister} // Close and reset success state
      />
    </Box>
  );
};

export default SignUpTemplate;
