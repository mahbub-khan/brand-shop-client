import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-10">
        <h1 className="text-center text-4xl font-bold py-6">All Brands</h1>
        {/* Apple, Samsung, Sony  */}
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/apple">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/dIF5Th9.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Apple</h2>
              </div>
            </Link>
          </div>
          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/samsung">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/EV79ICY.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Samsung</h2>
              </div>
            </Link>
          </div>
          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/sony">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/lP9BluJ.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Sony</h2>
              </div>
            </Link>
          </div>

          {/* Google, Intel, Xiaomi  */}

          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/google">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/z4QL5m7.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Google</h2>
              </div>
            </Link>
          </div>
          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/xiaomi">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/6OYyZna.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Xiaomi</h2>
              </div>
            </Link>
          </div>
          <div className="border-2 rounded-xl shadow-lg dark:bg-white dark:text-black">
            <Link to="/products/intel">
              <div className="flex justify-center items-center">
                <img src="https://i.imgur.com/GhOX2Ww.jpg" alt="Brand Image" />
              </div>
              <div className="border-t-2 py-3">
                <h2 className="font-medium text-2xl text-center">Intel</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
