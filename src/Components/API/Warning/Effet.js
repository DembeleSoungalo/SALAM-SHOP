import { FaDice } from "react-icons/fa"; 
import { FaDiceSix } from "react-icons/fa"; 
import { FaDiceFive } from "react-icons/fa"; 
import { FaDiceFour } from "react-icons/fa"; 
import { FaDiceThree } from "react-icons/fa"; 
import { FaDiceTwo } from "react-icons/fa"; 
import { FaDiceOne } from "react-icons/fa"; 
import { FaCartPlus } from "react-icons/fa"; 
import { FaBabyCarriage } from "react-icons/fa"; 

import React, { useState, useEffect } from 'react'

const Effet = () => {
    const [valeur, setValeur]= useState(0)
     useEffect(()=>{
        console.log("Effet appliquer");
        
    },[valeur])
    
  return (
    <div>
        <h1>{valeur} <FaBabyCarriage /> <FaDiceOne /><FaDiceTwo /><FaDiceThree /><FaDiceFour /><FaDiceFive /><FaDiceSix /><FaDice /></h1>
        <button onClick={()=>setValeur(valeur+1)}><FaCartPlus /></button>
    </div>
  )
}

export default Effet