import React, { useContext, useEffect } from "react";
import Carousal from "../Carousal/Carousal";
import { CartItemsContext } from "../Context/CartItems";
import Card from "../Card/Card";

const HomePage = () => {
  const { fetchApi, allProducts } = useContext(CartItemsContext);

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Carousal />
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
      {
      allProducts.map((products) => {
        return (
            <Card key={products.id} products={products} />
      
        );
      })
      }
      </div>
      </div>
      </section>
    </>
  );
};

export default HomePage;
