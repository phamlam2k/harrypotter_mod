import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "SaraBunRegular",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "SaraBunSemiBold",
    },
    h3: {
      fontFamily: "SaraBunBold",
    },
  },
});

export default theme;
