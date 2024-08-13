import { ThemeProvider } from "@mui/material";
import theme from "../constants/theme";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
