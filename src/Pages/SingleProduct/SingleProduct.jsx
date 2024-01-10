import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaCartPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../ContextProviders/CartContext";
import { Helmet } from "react-helmet-async";

const SingleProduct = () => {
  const {
    cartTotalPrice,
    setCartTotalPrice,
    cartTotalItems,
    setcartTotalItems,
  } = useContext(CartContext);

  const product = useLoaderData();

  const { _id, image, name, brand, productType, price, rating, description } =
    product || {};

  const handleAddToCart = () => {
    const productId = _id;
    const productImage = image;
    const productName = name;
    const productBrand = brand;
    const productPrice = parseFloat(price);
    const newCartProduct = {
      productId,
      productImage,
      productName,
      productBrand,
      productPrice,
    };
    //console.log(newCartProduct);

    fetch("https://server-brand-shop-ten.vercel.app/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congrats!",
            text: "Product Added to cart Successfully!!",
            icon: "success",
          });

          //Adding price to cart
          const newCartTotalPrice = cartTotalPrice + productPrice;
          setCartTotalPrice(newCartTotalPrice);

          //Adding item numbers to cart
          const newCartTotalItems = cartTotalItems + 1;
          setcartTotalItems(newCartTotalItems);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>STAR 💫 TECH</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen px-4">
          <div className="hero-content flex-col lg:flex-row mt-6 lg:mt-0">
            <img
              src={image}
              className="max-w-[70%] sm:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="mt-5 lg:mt-0 pl-0 lg:pl-6">
              <h3 className="capitalize text-xl font-semibold">
                Brand: {brand}
              </h3>
              <h1 className="text-5xl font-bold py-4">{name}</h1>
              <p className="text-justify">{description}</p>
              <p className="text-lg pt-4">Price: {price} €</p>
              <div className="card-actions py-6">
                <div className="badge badge-outline capitalize py-3">
                  Product Type: {productType}
                </div>
                <div className="badge badge-outline py-3 items-center">
                  Rating:{" "}
                  <Rating
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    fractions={2}
                    initialRating={rating}
                    readonly
                    className="mt-1 text-orange-300"
                  />{" "}
                  ({rating})
                </div>
              </div>

              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
