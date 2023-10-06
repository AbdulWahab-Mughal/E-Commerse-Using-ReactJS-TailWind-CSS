import React from "react";
import "./Card.css";
import { useContext } from "react";
import { CartItemsContext } from "../Context/CartItems";

const Card = ({ products }) => {
  let {incrementQuantity,items,setItems}=useContext(CartItemsContext)
  let { image, title, category, price } = products;

  const AddToCartHandler=(products)=>{
    incrementQuantity()
    setItems([...items,products])
  }

  const ButtonHandler=(products)=>{
    let CartProd = items.map((prod) =>{return (prod.id)})
    if(CartProd.includes(products.id)){
      alert("product is already added")
    }
    else{
      AddToCartHandler(products)
    }

  }
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
        <img
          className="lg:h-fit md:h-36 w-fit object-cover object-center images"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {category}
          </h1>
          <p className="leading-relaxed mb-3">{title}</p>
          <div className="flex items-center flex-wrap ">
            <button className="text-gray-900 inline-flex hover:bg-gray-700 hover:text-white items-center md:mb-2 lg:mb-0 bg-slate-400 p-2" onClick={()=>{
              ButtonHandler(products)
            }}>
              {
                items.map((prod)=>{
                  return(prod.id)

                }).includes(products.id)? "Product Added" : "Add To Cart"
              }
            </button>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
              <strong>$: </strong>
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
