import { lazy } from "react";

/* Authentication */
export const LoginLazyPage = lazy(
  () => import("../../../modules/auth/template/login.template")
);

export const SignUpLazyPage = lazy(
  () => import("../../../modules/auth/template/signup.template")
);