import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./@core/libs/constants/routes";

const routes = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
