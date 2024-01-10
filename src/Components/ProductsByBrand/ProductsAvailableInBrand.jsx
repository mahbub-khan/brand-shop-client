import ProdAvailableCard from "./ProdAvailableCard";

const ProductsAvailableInBrand = ({ products, brand }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">
        All Products from: <span className="capitalize">{brand}</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProdAvailableCard
            key={product._id}
            product={product}
          ></ProdAvailableCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsAvailableInBrand;
