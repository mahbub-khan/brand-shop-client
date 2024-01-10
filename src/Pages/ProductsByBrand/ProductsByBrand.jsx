import { useLoaderData, useParams } from "react-router-dom";
import ProductsAvailableInBrand from "../../Components/ProductsByBrand/ProductsAvailableInBrand";
import NoProductsInBrand from "../../Components/ProductsByBrand/NoProductsInBrand";
import { Helmet } from "react-helmet-async";

const ProductsByBrand = () => {
  const products = useLoaderData();

  //To show brand name if no products are available in a brand
  let { brand } = useParams();
  let capitalizeBrand = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div>
      <Helmet>
        <title>{capitalizeBrand} Products - STAR 💫 TECH</title>
      </Helmet>
      {products.length > 0 ? (
        <ProductsAvailableInBrand
          products={products}
          brand={brand}
        ></ProductsAvailableInBrand>
      ) : (
        <NoProductsInBrand brand={brand}></NoProductsInBrand>
      )}
    </div>
  );
};

export default ProductsByBrand;
