import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./Routes/Routes.jsx";
import CartContextProvider from "./ContextProviders/CartContext.jsx";
import AuthProvider from "./ContextProviders/AuthContextProviders.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CartContextProvider>
          <RouterProvider router={myRoutes} />
        </CartContextProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
