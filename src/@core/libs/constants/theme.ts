import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "sans-serif",
    },
    h3: {
      fontFamily: "sans-serif",
    },
  },
});

export default theme;
