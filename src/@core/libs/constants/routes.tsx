import { Route, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { LoginLazyPage } from "./lazy";

const ROUTES = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="login" element={<LoginLazyPage />} />
  </Route>
);

export default ROUTES;
