import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useLoginController from "../controllers/login.controller";

const LoginTemplate = () => {
  const { loginForm, handleSubmit, handleGoogleLogin, apiError, loading } = useLoginController();
  const [showPassword, setShowPassword] = useState(false);

  const getErrorMessage = (error: any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return undefined;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
      {apiError && (
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
            • {apiError}
          </Typography>
        </Box>
      )}
      <TextField
        id="email"
        label="Email address"
        variant="outlined"
        fullWidth
        margin="normal"
        {...loginForm.register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        })}
        error={!!loginForm.formState.errors.email}
        helperText={getErrorMessage(loginForm.formState.errors.email)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        {...loginForm.register("password", {
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
        error={!!loginForm.formState.errors.password}
        helperText={getErrorMessage(loginForm.formState.errors.password)}
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
      <Link
        href="/auth/forgot-password"
        variant="body2"
        align="right"
        display="block"
        mb={2}
        sx={{ textDecoration: "none", color: "purple" }}
      >
        Forgot your password?
      </Link>
      <FormControlLabel
        control={<Checkbox name="remember" color="primary" />}
        label="Remember me"
        sx={{ mt: 2 }}
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
        {loading ? "Logging in..." : "Log In"}
      </Button>
      
      {/* <Box mt={2} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? "Opening Google Login..." : "Login with Google"}
        </Button>
      </Box> */}
    </form>
  );
};

export default LoginTemplate;
