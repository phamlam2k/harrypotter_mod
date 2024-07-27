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
import useSignUpController from "../controllers/signup.controller";

const SignUpTemplate = () => {
  const { register, handleSubmit, errors, getValues, loading, error, success } = useSignUpController();
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
      onSubmit={handleSubmit}
      noValidate
      style={{ width: "100%" }}
    >
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
            value === getValues("password") ||
            "Passwords do not match",
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
        <FormHelperText>
          {getErrorMessage(errors.terms)}
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
        disabled={loading}
      >
        {loading ? "Signing Up..." : "SIGN UP"}
      </Button>

      {error && <p style={{textAlign: "center",  color: "red" }}>{error}</p>}
      {success && <p style={{textAlign: "center",  color: "green" }}>Registration successful!</p>}
    </form>
  );
};

export default SignUpTemplate;
