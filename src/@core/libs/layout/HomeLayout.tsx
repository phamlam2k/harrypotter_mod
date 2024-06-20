import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box>
      <header>Day la head</header>
      <Outlet />
      <footer>Day la footer</footer>
    </Box>
  );
};

export default HomeLayout;
