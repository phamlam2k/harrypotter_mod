import { Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { LoginLazyPage , SignUpLazyPage } from "./lazy";
import { Suspense } from "react";

const ROUTES = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route
      path="login"
      element={
        <Suspense fallback={<p>Loading Login Page</p>}>
          <LoginLazyPage />
        </Suspense>
      }
    />
     <Route
      path="signup"
      element={
        <Suspense fallback={<p>Loading SignUp Page</p>}>
          <SignUpLazyPage />
        </Suspense>
      }
    />
  </Route>
  
);

export default ROUTES;
