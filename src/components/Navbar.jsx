import { Link, NavLink } from "react-router-dom";
import user from '../assets/user.png'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <img className="w-[200px]" src={logo} alt="" />
      </div>
      <div className="links space-x-5 text-gray-600">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login flex items-center gap-3">
        <img src={user} alt="" />
        <Link to={'/auth/login'} className="bg-[#403F3F] px-7 py-2 text-white">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
