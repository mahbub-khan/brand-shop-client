import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../ContextProviders/AuthContextProviders";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`"${result.user.displayName}" Logged in Successfully`);

        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-lg mb-3">- or -</p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-active bg-transparent border-2 border-slate-700"
        >
          Login with Google <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
