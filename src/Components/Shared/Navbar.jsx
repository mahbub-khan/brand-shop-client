import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../ContextProviders/CartContext";
import { AuthContext } from "../../ContextProviders/AuthContextProviders";
import toast from "react-hot-toast";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const { cartTotalPrice, cartTotalItems } = useContext(CartContext);
  console.log(cartTotalPrice, cartTotalItems);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(toast.success("Logged Out Successfully!"))
      .catch((error) => toast.error(error.message));
  };

  const navigationLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add A Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="shadow-lg">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navigationLinks}
              </ul>
            </div>

            <Link
              className="btn btn-ghost text-lg sm:text-xl px-0 sm:px-4"
              to="/"
            >
              STAR 💫 TECH
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navigationLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center">
              {user ? (
                <>
                  <p className="font-medium hidden sm:block">
                    {user.displayName}
                  </p>
                  <div className="avatar">
                    <div className="w-8 sm:w-14 mask mask-squircle mx-3">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                  <button
                    className="btn bg-transparent border-black dark:border-gray-400 rounded-none text-base px-1 h-[2.3rem] min-h-[1rem] sm:px-4 sm:min-h-[3rem] sm:h-[3rem]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <div className="avatar">
                    <div className="w-8 sm:w-14 mask mask-squircle mr-3">
                      <img src="https://i.ibb.co/jG76Kd8/user.png" />
                    </div>
                  </div>
                  <Link to="/login">
                    <button className="btn bg-transparent border-black rounded-none text-base  px-1 h-[2.3rem] min-h-[1rem] sm:px-4 sm:min-h-[3rem] sm:h-[3rem]">
                      Login
                    </button>
                  </Link>
                </>
              )}
              <ThemeToggleButton></ThemeToggleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
