import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import withAuth from "../constants/withauth";


const BookLayout = () => {

  return (
      <>
      <Header />
        <Outlet />
      <Footer />
      </>
  );
};


export default withAuth(BookLayout);
