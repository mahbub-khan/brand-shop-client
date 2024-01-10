import { useLoaderData } from "react-router-dom";
import CartProducts from "../../Components/CartProducts/CartProducts";
import NoCartProducts from "../../Components/CartProducts/NoCartProducts";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const cartProducts = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>My Cart - STAR 💫 TECH</title>
      </Helmet>
      {cartProducts.length > 0 ? (
        <CartProducts cartProducts={cartProducts}></CartProducts>
      ) : (
        <NoCartProducts></NoCartProducts>
      )}
    </div>
  );
};

export default MyCart;
