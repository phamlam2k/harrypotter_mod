import { Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { LoginLazyPage, SignUpLazyPage, ForgortPasswordLazyPage } from "./lazy";
import { Suspense } from "react";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import HomeTemplate from "src/modules/apps/home/template/home.template";
import TestTemplate from "src/modules/apps/home/template/test.template";
import BookTemplate from "src/modules/apps/home/template/book.template";
import PageFlip from "src/modules/apps/home/template/pageflip.template";
import MostPopularPage from "src/modules/apps/home/template/popular.template";
import BookLayout from "../layout/BookLayout";
import RecentlyUpdatedPage from "src/modules/apps/home/template/recentupdate.template";

const ROUTES = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="/auth" element={<AuthLayout />}>
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
          <Suspense fallback={<p>Loading Forgot Password Page</p>}>
            <ForgortPasswordLazyPage />
          </Suspense>
        }
      />
    </Route>
    
    <Route path="/books" element={<BookLayout />}>
      <Route path=":id" element={<BookTemplate />} />
      <Route path=":id/chapters/:chapterId" element={<PageFlip />} />
      
    </Route>

    <Route path="/" element={<HomeLayout />}>
      <Route path="" element={<HomeTemplate />} />
      <Route path="library/popular" element={<MostPopularPage />} />
      <Route path="library/update" element={<RecentlyUpdatedPage />} />
      <Route path="test" element={<TestTemplate />} />
    </Route>
  </Route>
);

export default ROUTES;
