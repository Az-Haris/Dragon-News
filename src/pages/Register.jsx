
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card rounded-md bg-base-100 w-full max-w-md shrink-0">
          <form className="card-body">
              <h2 className="text-center font-semibold text-2xl text-gray-600">Register your account</h2>
              <hr className="my-5" />
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name='name'
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
                name='photo'
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
                type="email"
                name='email'
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
                type="password"
                name='password'
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
          <p className="text-center text-gray-500 mt-5">Already Have An Account ? <Link to={'/auth/login'} className="text-[#FF8C47]">Login</Link></p>
          </form>
        </div>
      </div>
    );
};

export default Register;