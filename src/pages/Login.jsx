import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card rounded-md bg-base-100 w-full max-w-md shrink-0">
        <form className="card-body">
            <h2 className="text-center font-semibold text-2xl text-gray-600">Login your account</h2>
            <hr className="my-5" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
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
            <button className="btn btn-neutral rounded-sm">Login</button>
          </div>
        <p className="text-center text-gray-500 mt-5">Don&apos;t Have An Account ? <Link to={'/auth/register'} className="text-[#FF8C47]">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
