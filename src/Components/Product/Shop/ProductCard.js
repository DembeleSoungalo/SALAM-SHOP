// import { BiCartAdd } from "react-icons/bi"; 
import React, { useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'






const ProductCard = ({model,price,logo,brand}) => {
    const [activeColor, setActiveColor] = useState('blue'); // Initialize active color state
    const [count, setcout] = useState(0);
  const addProd = ()=>{
    setcout(count + 1)
  }
  const removeProd = ()=>{
    setcout(count - 1)
  }


    const handleColorChange = (event) => {
        const target = event.target;
        if (target.classList.contains("circle")) {
          setActiveColor(target.id); // Update active color state
        }
      };
      const activeClass = activeColor === 'blue' ? 'active' : '';
      const activeClass2 = activeColor === 'pink' ? 'active' : '';
      const activeClass3 = activeColor === 'yellow' ? 'active' : '';
      
  return (
      <div className="product-card ">
      <div className="logo-cart ">
        <img src={""} alt="logo" />
        <i className="bx bx-shopping-bag"></i>
      </div>
      <div className="main-images">
    <img id="blue" className={`blue ${activeClass}`} src={logo} alt="blue" />
  

    </div>
      <div className="shoe-details">
        <span className="shoe_name">{model}</span>
        <p>{brand}</p>
        </div>
        <div className="color-price">
        <div className="color-option" onClick={handleColorChange}>   

          <span className="color">Colour:</span>
          <div className="circles">
            <span className={`circle blue ${activeClass}`} id="blue"></span>
            <span className={`circle pink ${activeClass}`} id="pink"></span>
            <span className={`circle yellow ${activeClass}`} id="yellow"></span>
            </div>
        </div>
        <div className="price">
          <span className="price_num"> { price} FCFA</span>
        </div>
      </div>
      <div className="button">
        <div className="button-layer"></div>
        <button onClick={addProd}>Add to Cart</button>
      </div>
    </div>
  
);
}

export default ProductCard