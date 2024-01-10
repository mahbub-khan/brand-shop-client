import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProdAvailableCard = ({ product }) => {
  const { _id, image, name, brand, productType, price, rating, description } =
    product || {};

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-5 lg:pr-0">
          <img src={image} alt="Album" className="max-h-[300px] lg:h-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="capitalize text-lg">Brand: {brand}</h3>
          <p className="flex-grow-0 text-lg">Price: {price} €</p>
          <div className="card-actions">
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
          <div className="card-actions mt-3">
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-success">Details</button>
            </Link>
            <Link to={`/updateproduct/${_id}`}>
              <button className="btn btn-warning">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdAvailableCard;
