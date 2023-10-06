import React, { useContext } from 'react'
import "./Header.css"
import Image from "../../assets/Images/—Pngtree—store ceiling_1044193.png"
import { BsCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartItemsContext } from '../Context/CartItems'
const Header = () => {
  let{itemsQuantity}=useContext(CartItemsContext)
  return (
    <header className="text-white body-font bg-slate-600 Head sticky right-0 left-0 top-0">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <li className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={Image} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className=" h-16 text-white rounded-full" viewBox="0 0 24 24"/>
        
      <span className=" ml-1 text-4xl">MyStore</span>
    </li>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <li className=' list-none mr-5 '><NavLink to="/">Home</NavLink></li>
      <li className=' list-none mr-5 '><NavLink to="/about">About</NavLink></li>
      <li className=' list-none mr-5 '><NavLink to="/gallery">Gallery</NavLink></li>
      <li className=' list-none mr-5'><NavLink to="/cart">Cart</NavLink></li>
    </nav>
    

    <div className=' flex flex-wrap mr-8'>
        <BsCartFill  size={30}/><sup>{itemsQuantity}</sup>

    </div>
  </div>
</header>

  )
}

export default Header