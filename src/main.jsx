import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartItemsProvider } from "./Components/Context/CartItems.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartItemsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartItemsProvider>
);
