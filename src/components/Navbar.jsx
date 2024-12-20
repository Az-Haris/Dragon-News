import { Link, NavLink } from "react-router-dom";
import userLogo from '../assets/user.png'
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <img className="w-[200px]" src={logo} alt="" />
        <h2>{user?.email}</h2>
      </div>
      <div className="links space-x-5 text-gray-600">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login flex items-center gap-3">
        <img src={userLogo} alt="" />
        {
          user ? <Link onClick={logOut} to={'/'} className="bg-[#403F3F] px-7 py-2 text-white">Logout</Link> : <Link to={'/auth/login'} className="bg-[#403F3F] px-7 py-2 text-white">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
