import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./Product.module.css"









const Product = ({ brand, model, price, isAvailable , logo}) => {
  const [count, setcout] = useState(0);
  const addProd = ()=>{
    setcout(count + 1)
  }
  const removeProd = ()=>{
    setcout(count - 1)
  }
  return (
    <div className={styles.product}>
      <img src={logo} alt={brand} />
      <h2>
        {brand} {model}
      </h2>
      <p>Prix : {price} FCFA</p>
      {/* <span id="sold">sold : {sold} € </span> */}
      <p>Disponibilité : {isAvailable ? "En stock" : "Indisponible"}</p>
      {/* Ajoutez d'autres éléments pour afficher les autres propriétés */}
     <button onClick={addProd}>Ajouter au panier </button>
     <button onClick={removeProd}>Supprimer du panier</button>
    </div>
  )
}

Product.defaultProps = {
  price: 0,
  isAvailable: true,
 brand : "Inconnu",
 model : "Inconnu",
 logo : "https://via.placeholder.com/150"
}

Product.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number,
  isAvailable: PropTypes.bool,
  logo: PropTypes.string
  
}

export default Product
