import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Get Form Data
        const form = new FormData(e.target);
        const name = form.get('name')
        const photoURL = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        
        // Create User
        createNewUser(email, password)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(err=>console.log(err))

        
    }
  return (
    <div className="py-10 flex justify-center items-center">
      <div className="card rounded-md bg-base-100 w-full max-w-md shrink-0">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-2xl text-gray-600">
            Register your account
          </h2>
          <hr className="my-5" />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
            autoComplete="surname"
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
            autoComplete="current-password"
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
          <p className="text-center text-gray-500 mt-5">
            Already Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-[#FF8C47]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
