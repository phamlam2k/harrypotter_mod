import React, { useState } from "react";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useSignUpController from "../controllers/signup.controller"; // Assuming you have a sign-up controller

const SignUpTemplate = () => {
  const { signUpForm, handleSubmit } = useSignUpController();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  return (
    <form
      onSubmit={signUpForm.handleSubmit(handleSubmit)}
      noValidate
      style={{ width: "100%" }}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        {...signUpForm.register("username", {
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters long",
          },
        })}
        error={!!signUpForm.formState.errors.username}
        helperText={getErrorMessage(signUpForm.formState.errors.username)}
      />
      <TextField
        id="email"
        label="Email address"
        variant="outlined"
        fullWidth
        margin="normal"
        {...signUpForm.register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        })}
        error={!!signUpForm.formState.errors.email}
        helperText={getErrorMessage(signUpForm.formState.errors.email)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        {...signUpForm.register("password", {
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
        error={!!signUpForm.formState.errors.password}
        helperText={getErrorMessage(signUpForm.formState.errors.password)}
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
        {...signUpForm.register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value: any) =>
            value === signUpForm.getValues("password") ||
            "Passwords do not match",
        })}
        error={!!signUpForm.formState.errors.confirmPassword}
        helperText={getErrorMessage(
          signUpForm.formState.errors.confirmPassword
        )}
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
      <FormControl error={!!signUpForm.formState.errors.terms} sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Checkbox name="terms" color="primary" />}
          label="I agree to the terms and conditions"
          {...signUpForm.register("terms", {
            required: "You must agree to the terms and conditions",
          })}
        />
        <FormHelperText>
          {getErrorMessage(signUpForm.formState.errors.terms)}
        </FormHelperText>
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
      >
        SIGN UP
      </Button>
    </form>
  );
};

export default SignUpTemplate;
