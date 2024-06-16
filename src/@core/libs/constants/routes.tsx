import { Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { LoginLazyPage } from "./lazy";
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
  </Route>
);

export default ROUTES;
