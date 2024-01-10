import { useContext } from "react";
import { AuthContext } from "./AuthContextProviders";
import { Navigate } from "react-router-dom";

const PrivateLoginRegisterRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default PrivateLoginRegisterRoute;
