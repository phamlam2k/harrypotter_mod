import { lazy } from "react";

/* Authentication */
export const LoginLazyPage = lazy(
  () => import("../../../modules/auth/templates/login.template")
);
