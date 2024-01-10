import { Link } from "react-router-dom";
import { FaHouseChimneyWindow } from "react-icons/fa6";

const NoCartProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-[70vh] flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-medium mb-4">Your cart is empty ☹️</h1>
          <Link to="/" className="flex justify-center">
            <button className="btn">
              Go to Home <FaHouseChimneyWindow />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoCartProducts;
