import React from 'react'
import Gallery from '../Gallery/Gallery'
import Carousal from '../Carousal/Carousal'

const GalleryPage = () => {
  return (
    <>
    <Carousal/>
    <h1 className=' text-5xl font-serif mt-12 text-center border-b-2 border-gray-400'>Gallery/Collage</h1>
    <Gallery/>
    </>

  )
}

export default GalleryPage