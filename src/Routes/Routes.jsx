import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import ProductsByBrand from "../Pages/ProductsByBrand/ProductsByBrand";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../ContextProviders/PrivateRoute";
import PrivateLoginRegisterRoute from "../ContextProviders/PrivateLoginRegisterRoute";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://server-brand-shop-ten.vercel.app/mycart"),
      },
      {
        path: "/products/:brand",
        element: <ProductsByBrand></ProductsByBrand>,
        loader: ({ params }) =>
          fetch(
            `https://server-brand-shop-ten.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-brand-shop-ten.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-brand-shop-ten.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/register",
        element: (
          <PrivateLoginRegisterRoute>
            <Register></Register>
          </PrivateLoginRegisterRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateLoginRegisterRoute>
            <Login></Login>
          </PrivateLoginRegisterRoute>
        ),
      },
    ],
  },
]);

export default myRoutes;
