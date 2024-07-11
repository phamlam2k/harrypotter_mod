import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const HomeLayout = () => {
  return (
    <Box>
      <Header/>
      <Outlet />
      <Footer/>
    </Box>
  );
};

export default HomeLayout;
