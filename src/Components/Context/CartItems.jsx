import axios from "axios";
import { createContext, useState } from "react";

const CartItemsContext = createContext({});

const CartItemsProvider = ({children}) => {
  const [allProducts, setAllProducts] = useState([])
  let [itemsQuantity, setItemsQuantity] = useState(0)
  let [items, setItems] = useState([])
  
  
  
  const incrementQuantity = ()=>{
    setItemsQuantity(++itemsQuantity)
  } 
  const decrementQuantity = ()=>{
    if(itemsQuantity>0){

      setItemsQuantity(--itemsQuantity)
    }
  } 

  const fetchApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const objToSend = {
    fetchApi,
    setAllProducts,
    allProducts,
    itemsQuantity,
    incrementQuantity,
    decrementQuantity,
    items,
    setItems
  };

  return (
    <CartItemsContext.Provider value={objToSend}>
      {children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsContext, CartItemsProvider };
