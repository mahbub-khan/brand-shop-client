import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5">🛑 404 🛑</h1>
        <h1 className="text-5xl font-bold mb-5">
          We couldn't find your page ☹️
        </h1>

        <Link to="/">
          <button className="btn btn-active rounded-none bg-transparent">
            Go to Home <FaHouseChimney />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
