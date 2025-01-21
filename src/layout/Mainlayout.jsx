import { Outlet } from "react-router-dom";
import Navbar from "../Component/SharedComponent/Navbar";
import Footer from "../Component/SharedComponent/Footer";

const Mainlayout = () => {
  return (
    <div className="bg-red-500 ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
