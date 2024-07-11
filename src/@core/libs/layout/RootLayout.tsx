import { ThemeProvider } from "@mui/material";
import theme from "../constants/theme";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
};

export default RootLayout;
