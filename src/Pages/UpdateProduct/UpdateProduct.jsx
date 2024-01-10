import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, image, name, brand, productType, price, rating, description } =
    product || {};

  const [updatedRating, setUpdatedRating] = useState(rating);

  const handleRatingChange = (e) => {
    setUpdatedRating(parseFloat(e.target.value));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updatedProduct = {
      image,
      name,
      brand,
      productType,
      price,
      rating,
      description,
    };
    console.log(updatedProduct);

    fetch(`https://server-brand-shop-ten.vercel.app/productdetails/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congrats!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Product - STAR 💫 TECH</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100 my-9">
          <h1 className="text-2xl text-center font-bold pt-3">
            Update Your Product
          </h1>
          <form onSubmit={handleUpdate} className="card-body pt-2">
            {/* Image and Name  */}
            <div className="block sm:flex gap-5 p-4">
              <div className="form-control sm:w-1/2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control sm:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Brand Name and Product Type  */}
            <div className="block sm:flex gap-5 p-4 pt-0">
              <div className="form-control sm:w-1/3">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <select
                  name="brand"
                  className="input input-bordered"
                  defaultValue={brand}
                >
                  <option value="" disabled>
                    Please choose a brand
                  </option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="sony">Sony</option>
                  <option value="google">Google</option>
                  <option value="xioami">Xioami</option>
                  <option value="intel">Intel</option>
                </select>
              </div>
              <div className="form-control sm:w-1/3">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <select
                  name="productType"
                  className="input input-bordered"
                  defaultValue={productType}
                >
                  <option value="" disabled>
                    Please choose a product type
                  </option>
                  <option value="phone">Phone</option>
                  <option value="computer">Computer</option>
                  <option value="headphone">Headphone</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-control sm:w-1/3">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  step="any"
                  defaultValue={price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Rating and Description  */}
            <div className="block sm:flex gap-5 p-4 pt-0">
              <div className="form-control sm:w-1/3">
                <label className="label">
                  <span className="label-text">
                    Rating: {updatedRating} / 5
                  </span>
                </label>
                <input
                  type="range"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.5"
                  value={updatedRating}
                  onChange={handleRatingChange}
                  className="mt-4"
                />
              </div>
              <div className="form-control mt-3 sm:mt-0 sm:w-2/3">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  placeholder="Product Description"
                  rows="4"
                  cols="50"
                  className="input input-bordered"
                  required
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="btn w-full mx-auto"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
