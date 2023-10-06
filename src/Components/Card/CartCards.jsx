import React, { useContext } from 'react'
import { CartItemsContext } from '../Context/CartItems'
// import images from "../../assets/Images/C1.jpg"
const CartCards = ({products,index}) => {
  let {decrementQuantity,items,setItems}=useContext(CartItemsContext)
    let {title,price,description,image,category,rating}=products


    const removeHandler = (products,index) =>{
      decrementQuantity()
      items.splice(index,1)
      setItems([...items])
    }
  return (
    <>
  
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img
          className="lg:h-modal md:h-36 w-fit object-cover object-center"
          src={image}
          alt="blog"
        />
          <span className="mt-5 text-gray-500 text-lg text-center">⭐ {rating.rate}</span>
        </div>
        <div className="md:flex-grow ml-8">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {category}
          </h1>
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
          <p className="leading-relaxed">{description}</p>
          <button className="text-gray-900 inline-flex hover:bg-gray-700 hover:text-white  items-center mt-4 bg-slate-400 p-2 " onClick={()=>{
            removeHandler(products,index)
            }}>Remove From Cart
            
          </button>
          <h1 className="mt-5 text-gray-500 text-lg  "> <strong>$: </strong>
              {price}</h1>
        </div>
      </div>
     
    </div>
  
    </>
  )
}

export default CartCards