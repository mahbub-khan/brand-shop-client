import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProviders/AuthContextProviders";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [passLength, setPassLength] = useState(false);
  const [isCapLetter, setIsCapLetter] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassOnChange = (e) => {
    const passwordFieldValue = e.target.value;

    passwordFieldValue.length > 5 ? setPassLength(true) : setPassLength(false);

    const oneCapLetter = /^(?=.*[A-Z])[\s\S]*$/.test(passwordFieldValue);
    oneCapLetter ? setIsCapLetter(true) : setIsCapLetter(false);

    const oneSpecialChar = /^(?=.*[!@#$%^&*()_+])[\s\S]*$/.test(
      passwordFieldValue
    );
    oneSpecialChar ? setIsSpecialChar(true) : setIsSpecialChar(false);
  };

  //Toggling the register button
  useEffect(() => {
    if (passLength && isCapLetter && isSpecialChar) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [passLength, isCapLetter, isSpecialChar]);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
      .then((res) => {
        updateUser(name, image)
          .then(() => {
            toast.success(`"${name}" created an account successfully`);
            navigate("/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>Register - STAR 💫 TECH</title>
      </Helmet>
      <div>
        <div className="hero min-h-[90vh] py-8">
          <div className="hero-content w-[350px] sm:w-[500px]">
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-4xl font-bold mb-3 text-center">
                  Create an account!!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
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
                    className="input input-bordered mb-3"
                    onChange={handlePassOnChange}
                    required
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute top-[50px] right-[15px] text-[#8d8d8d]"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <div id="password-validators" className="text-sm">
                    <p>Must have at least:</p>
                    <div>
                      <p
                        className={
                          passLength ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {passLength ? "✅" : "⛔"} 6 characters
                      </p>
                      <p
                        className={
                          isCapLetter ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {isCapLetter ? "✅" : "⛔"} one Capital Letter
                      </p>
                      <p
                        className={
                          isSpecialChar ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {isSpecialChar ? "✅" : "⛔"} one special
                        character(eg. ! @ # $ % ^ & * ( ) _ +)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button
                    className={`btn ${
                      buttonDisabled ? "btn-disabled" : "btn-primary"
                    }`}
                  >
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? Please{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
