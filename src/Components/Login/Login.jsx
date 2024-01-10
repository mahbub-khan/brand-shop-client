import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProviders/AuthContextProviders";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const location = useLocation();
  //console.log(location);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        toast.success(`"${result.user.displayName}" Logged in Successfully`);

        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <Helmet>
        <title>Login - STAR 💫 TECH</title>
      </Helmet>
      <div>
        <div className="hero min-h-[90vh] py-8">
          <div className="hero-content w-[350px] sm:w-[500px]">
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body pb-1">
                <div className="form-control">
                  <h1 className="text-4xl font-bold mb-4 text-center">
                    Login now!
                  </h1>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute top-[50px] right-[15px] text-[#8d8d8d]"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center">
                  Don't have an account? Please{" "}
                  <Link to="/register" className="text-blue-500 underline">
                    Register
                  </Link>{" "}
                  first.
                </p>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
