import React from "react"
import Product from "./Product"
import ProductCard from "./Shop/ProductCard"
import img1 from './Shop/img/iPhone14Max.jpg'

const ProductsList = () => {
  const products = [
    { brand: "Apple", model: "iPhone 14 Pro", price: 1200, isAvailable: true,   logo :img1 },
    {
      brand: "Samsung",
      model: "Galaxy S23 Ultra",
      price: 1300,
      logo : img1
    },
    { brand: "Tecno", model: "Camon 30", price: 700, isAvailable: true, logo : img1},
    {
      brand: "Huawei",
      model: "Mate x",
      price: 1000,
      isAvailable: true,
     logo : img1
    }
    
    // Ajoutez d'autres produits
  ]

  return (
    <div>
      <h1>Liste des produits</h1>
      {products.map(product => (
        <ProductCard key={product.model} {...product} />
      ))}
    </div>
  )
}

export default ProductsList
