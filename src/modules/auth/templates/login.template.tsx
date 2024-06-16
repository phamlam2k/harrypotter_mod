import useLoginController from "../controllers/login.controller";

const LoginTemplate = () => {
  const { loginForm, handleSubmit } = useLoginController();

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginForm.handleSubmit(handleSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...loginForm.register("username")}
        />
        <input
          type="password"
          placeholder="Password"
          {...loginForm.register("password")}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginTemplate;
