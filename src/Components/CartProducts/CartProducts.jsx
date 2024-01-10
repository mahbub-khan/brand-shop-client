import { useState } from "react";
import SingleCartProduct from "./SingleCartProduct";
import NoCartProducts from "./NoCartProducts";

const CartProducts = ({ cartProducts }) => {
  const [cartUpdated, setCartUpdated] = useState(cartProducts);

  //const { setCartInfo } = useContext(CartContext);

  let totalPrice = 0;

  for (let cartProduct of cartUpdated) {
    totalPrice += cartProduct.productPrice;
  }

  //setCartInfo({ totalPrice, itemCount: cartUpdated.length });
  // useEffect(() => {
  //   setCartInfo({ totalPrice, itemCount: cartUpdated.length });
  // }, [totalPrice, cartUpdated.length, setCartInfo]);

  return (
    <div>
      {/* to return the NoCartProducts component when the last cart element is deleted  */}
      {cartUpdated.length > 0 ? (
        <div className="max-w-7xl min-h-[70vh] mx-auto px-4 py-8">
          <div>
            <h1 className="text-center text-3xl font-bold mb-8">
              Subtotal: {totalPrice.toFixed(2)} € - ( {cartUpdated.length}{" "}
              {cartUpdated.length > 1 ? "items" : "item"})
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cartUpdated.map((cartProduct) => (
              <SingleCartProduct
                key={cartProduct._id}
                cartProduct={cartProduct}
                cartUpdated={cartUpdated}
                setCartUpdated={setCartUpdated}
              ></SingleCartProduct>
            ))}
          </div>
        </div>
      ) : (
        <NoCartProducts></NoCartProducts>
      )}
    </div>
  );
};

export default CartProducts;
