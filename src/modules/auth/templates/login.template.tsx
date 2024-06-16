import { Box, TextField, Typography } from "@mui/material";
import useLoginController from "../controllers/login.controller";

const LoginTemplate = () => {
  const { loginForm, handleSubmit } = useLoginController();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">Login</Typography>
      <form onSubmit={loginForm.handleSubmit(handleSubmit)}>
        {/* <input
          type="text"
          placeholder="Username"
          {...loginForm.register("username")}
        /> */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          {...loginForm.register("username")}
        />

        <input
          type="password"
          placeholder="Password"
          {...loginForm.register("password")}
        />
        <button type="submit">Login</button>
      </form>
    </Box>
  );
};

export default LoginTemplate;
