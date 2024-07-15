import { Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { LoginLazyPage, SignUpLazyPage, ForgortPasswordLazyPage } from "./lazy";
import { Suspense } from "react";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import HomeTemplate from "src/modules/apps/home/template/home.template";
import TestTemplate from "src/modules/apps/home/template/test.template";
import BookTemplate from "src/modules/apps/home/template/book.template";

const ROUTES = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="/auth/" element={<AuthLayout />}>
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
      <Route
        path="forgot-password"
        element={
          <Suspense fallback={<p>Loading SignUp Page</p>}>
            <ForgortPasswordLazyPage />
          </Suspense>
        }
      />
    </Route>
    <Route path="/" element={<HomeLayout />}>
      <Route path="" element={<HomeTemplate />} />
      <Route path="books/:id" element={<BookTemplate />} />
      <Route path="test" element={<TestTemplate />} />

    </Route>
  </Route>
);

export default ROUTES;
