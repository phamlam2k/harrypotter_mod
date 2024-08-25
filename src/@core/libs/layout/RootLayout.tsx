import { ThemeProvider } from "@mui/material";
import theme from "../constants/theme";
import { Outlet } from "react-router-dom";
import withAuth from './BookLayout';

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet/>
    </ThemeProvider>
  );
};

export default RootLayout;
