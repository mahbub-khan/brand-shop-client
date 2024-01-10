import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../ContextProviders/CartContext";

const SingleCartProduct = ({ cartProduct, cartUpdated, setCartUpdated }) => {
  const {
    cartTotalPrice,
    setCartTotalPrice,
    cartTotalItems,
    setcartTotalItems,
  } = useContext(CartContext);

  const {
    _id,
    productId,
    productImage,
    productName,
    productBrand,
    productPrice,
  } = cartProduct || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-brand-shop-ten.vercel.app/mycart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              //To delete items from front-end
              const remainingCartProducts = cartUpdated.filter(
                (singleCartProduct) => singleCartProduct._id !== id
              );
              setCartUpdated(remainingCartProducts);

              //Subtracting from cart total price after deletion
              const newCartTotalPrice = cartTotalPrice - productPrice;
              setCartTotalPrice(newCartTotalPrice);

              //Subtracting from cart total item number after deletion
              const newCartTotalItems = cartTotalItems - 1;
              setcartTotalItems(newCartTotalItems);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-5 lg:pr-0">
          <img
            src={productImage}
            alt="Album"
            className="max-h-[300px] lg:h-auto"
          />
        </figure>
        <div className="card-body">
          <h3 className="capitalize text-lg font-medium underline">
            <Link to={`/products/${productBrand}`}>{productBrand}</Link>
          </h3>
          <Link to={`/productdetails/${productId}`}>
            <h2 className="card-title hover:underline">{productName}</h2>
          </Link>
          <p className="flex-grow-0 text-lg">Price: {productPrice} €</p>
          <div className="card-actions mt-3">
            <button
              className="btn btn-error text-white"
              onClick={() => handleDelete(_id)}
            >
              Delete <FaRegTrashCan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
