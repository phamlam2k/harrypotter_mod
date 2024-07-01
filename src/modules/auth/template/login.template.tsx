import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useLoginController from "./../controllers/login.controller";

const LoginTemplate = () => {
  const { loginForm, handleSubmit } = useLoginController();
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
    <form
      onSubmit={loginForm.handleSubmit(handleSubmit)}
      noValidate
      style={{ width: "100%" }}
    >
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
        error={!!loginForm.formState.errors.username}
        helperText={getErrorMessage(loginForm.formState.errors.username)}
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
        href="#"
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
      >
        LOGIN
      </Button>
    </form>
  );
};

export default LoginTemplate;
