import React, { useContext } from "react";
import CartCards from "../Card/CartCards";
import { CartItemsContext } from "../Context/CartItems";
import EmptyPage from "./EmptyPage";

const AddCart = () => {
  let { items} = useContext(CartItemsContext);
  
  return (
    <>
      
      
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          { items.length < 1 ? <EmptyPage/>:
            items.map((products,index)=>{
              return (
                  
                  <CartCards key={products.id} products={products} index={index}/>
              ) 

            })
        }</div>
      </section>
    </>
  );
};

export default AddCart;
