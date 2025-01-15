import React from "react"
import ProductCard from "./ProductCard"


const ProductsList = () => {
  // const products = [
  //   { brand: "Apple", model: "iPhone 14 Pro", price: 1200, isAvailable: true,   logo :"https://istyle.ma/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_14_pro_gold_pdp_image_position-1a_en.jpg"},
  //   {
  //     brand: "Samsung",
  //     model: "Galaxy S23 Ultra",
  //     price: 1300,
  //     logo : "https://cdn.dxomark.com/wp-content/uploads/medias/post-139011/Samsung-Galaxy-S23-Ultra_-featured-image-packshot-review.jpg"
  //   },
  //   { brand: "Tecno", model: "Camon 30", price: 700, isAvailable: true, logo : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tecno-mobile.com%2Fml%2Ftelephones%2Ftech-specs-ml%2Ftecspecs%2Fcamon-30%2F&psig=AOvVaw2LpP6O0urx4EvPYjk2EQsK&ust=1736859099038000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC9j8be8ooDFQAAAAAdAAAAABAE"},
  //   {
  //     brand: "Huawei",
  //     model: "Mate x",
  //     price: 1000,
  //     isAvailable: true,
  //    logo : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleclaireur.fnac.com%2Farticle%2F14351-mwc-2019-huawei-mate-x-on-a-pu-approcher-le-premier-smartphone-pliable-et-5g-de-la-marque%2F&psig=AOvVaw2dnnOoLZZxeNcqJYNqxSnh&ust=1736859190080000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjt8Ynf8ooDFQAAAAAdAAAAABAc"
  //   }
    
   
  // ]
  const products = [
    { 
      brand: "Apple", 
      model: "iPhone 14 Pro", 
      price: 1200, 
      isAvailable: true,   
      logo: "https://istyle.ma/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_14_pro_gold_pdp_image_position-1a_en.jpg"
    },
    {
      brand: "Samsung",
      model: "Galaxy S23 Ultra",
      price: 1300,
      logo: "https://cdn.dxomark.com/wp-content/uploads/medias/post-139011/Samsung-Galaxy-S23-Ultra_-featured-image-packshot-review.jpg"
    },
    { 
      brand: "Tecno", 
      model: "Camon 30", 
      price: 700, 
      isAvailable: true, 
      logo: "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon/30pro5g/30s/black.png"
    },
    {
      brand: "Huawei",
      model: "Mate X",
      price: 1000,
      isAvailable: true,
      logo: "https://static.fnac-static.com/multimedia/Images/FD/Comete/128954/CCP_IMG_1200x800/1685610.jpg"
    },
    {
      brand: "Google",
      model: "Pixel 7",
      price: 900,
      isAvailable: true,
      logo: "https://www.cellularsales.com/wp-content/uploads/2023/01/pixel-7-pro-hazel.png"
    },
    {
      brand: "OnePlus",
      model: "OnePlus 11",
      price: 800,
      isAvailable: true,
      logo: "https://fr.shopping.rakuten.com/photo/2371539643_ML.jpg"
    },
    {
      brand: "Sony",
      model: "Xperia 1 IV",
      price: 1100,
      isAvailable: true,
      logo: "https://sony.scene7.com/is/image/sonyglobalsolutions/PDX-223_black_v01-1?$S7Product$&fmt=png-alpha"
    }
  ];


  return (
    <div>
     <h1>Découvrez nos produits</h1>
     <p>SalamShopElectro - Votre destination pour les dernières technologies</p>
      {products.map(product => (
        <ProductCard key={product.model} {...product} />
      ))}
    </div>
  )
}

export default ProductsList
