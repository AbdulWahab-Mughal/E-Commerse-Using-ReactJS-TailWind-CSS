import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import AddCart from '../CartPage/AddCart'
import GalleryPage from '../GalleryPage/GalleryPage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<AddCart/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
    </Routes>
  )
}

export default Router