'use client';
import React from 'react'
import { Carousel } from 'flowbite-react';
import C1 from "../../assets/Images/C1.jpg"
import C2 from "../../assets/Images/C2.jpg"
import C3 from "../../assets/Images/C3.jpg"
import G1 from "../../assets/Images/G1.jpeg"
import G2 from "../../assets/Images/G2.jpeg"
import G3 from "../../assets/Images/G3.jpg"
import G4 from "../../assets/Images/G4.jpg"
import "./Carousal.css"

const Carousal = () => {
  return (
    <div className='Crousel'>

    <Carousel className='Crousel'>
      <img
        alt="..."
        src={C3}
        />
      
      <img
        alt="..."
        src={C1}
      />
      <img
        alt="..."
        src={C2}
        />
      <img
        alt="..."
        src={G1}
        />
      <img
        alt="..."
        src={G2}
        />
      <img
        alt="..."
        src={G3}
        />
      <img
        alt="..."
        src={G4}
        />
    </Carousel>
        </div>
  )
}


export default Carousal