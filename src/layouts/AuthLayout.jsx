import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <div className="container mx-auto">
        <header className="py-5">
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
