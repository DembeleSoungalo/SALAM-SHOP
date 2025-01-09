import React from 'react';
// import './App.css';
// import Product from './Components/Product/Product';
// import ProductsList from './Components/Product/ProductsList';
// import Skils from './Components/Skils';
// import Avatar from './Components/Avatar';
// import Counter from './Components/Counter';
// import Ludo from './Components/Ludo';
// import Hero from './Components/Hero';
// import Pluton from './Components/assets/Pluton/Pluton';
// import Student from './Components/assets/Student/Student';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from './Components/Product/Shop/ProductCard';
import ProductsList from './Components/Product/ProductsList';
import Header from './Components/Product/Header/Header';
import { Carousel } from 'bootstrap';
import ShopCarousel from './Components/Product/Shop/CustomCarousel';
import CustomCarousel from './Components/Product/Shop/CustomCarousel';
import img2 from './Components/Product/Shop/img/iPhone14Max.jpg'
import ordi_1 from './Components/Product/Shop/img/ordi_1.jpg'
import ordi_2 from './Components/Product/Shop/img/ordi_2.jpg'
import ens_ordi from './Components/Product/Shop/img/ens_ordi.jpg'
import Cover from './Components/Product/Header/Cover';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navigation from './Components/Navigation/Navigation';
// import Venus from './Components/Venus/Venus';
// import UserConnected from './Components/USerState/UserConnected';
// import ChangeName from './Components/USerState/ChangeName';
// import Menu from './Components/USerState/Menu/Menu';
// import Terre from './Components/Hooks/Terre/Terre';
// import Effet from './Components/Effet';

// import Header from './Components/Product/Header/Header';
// import Search from './Components/Product/Header/Search';
// import Reducer from './Components/ReducerCours/Reducer';
// import Reducer2 from './Components/ReducerCours/Reducer2';
// import Memo from './Components/ReducerCours/Memo/Memo';
// import Conrtext1 from './Components/ReducerCours/Memo/Constext/Conrtext1';
// import Context2 from './Components/Context/Context2';
// import Form1 from './Components/Context/FormControl/Form1';
// import { Button } from 'bootstrap';
// import Form2 from './Components/Context/FormControl/Form2';
// import Carousel from './Components/Context/FormControl/carousel/Carousels';
// import FormReducer from './Components/ReducerCours/FormReducer';
// import Calculator from './Components/Calculator';
//API
// import UseFetch from './Components/API/UseFetch';
// import UseAxios from './Components/API/UseAxios';




function App() {
  // const images = [
  //   'https://via.placeholder.com/800x400/ff5733/fff',
  //   'https://via.placeholder.com/800x400/33ff57/fff',
  //   'https://via.placeholder.com/800x400/5733ff/fff',
  // ];
  const slides = [
    {
      image: {ordi_1},
      altText: 'First slide',
      title: 'First Slide Title',
      description: 'First slide description',
    },
    {
      image: {ordi_2},
      altText: 'First slide',
      title: 'First Slide Title',
      description: 'First slide description',
    },
    {
      image: {ens_ordi},
      altText: 'First slide',
      title: 'First Slide Title',
      description: 'First slide description',
    },
    // ... more slides
  ];
  return (
    <div className="App">
    {/* <ProductCard/> */}

    <Navigation/>

<CustomCarousel slides={slides} />
    
    <Header />
    <Cover/>
    {/* <Carousel/> */}


    <ProductsList/>
    {/* <ProductCard/> */}
    {/* <UseAxios/> */}
    {/* <UseFetch/> */}
    {/* <Calculator/> */}

    {/* <FormReducer/> */}
  {/* <Form1/> */}
 {/* <Form2/> */}
 {/* <h1>Simple React Carousel</h1>
      <Carousel images={images}/> */}
<Footer/>
    </div>
    
  );
}

export default App;
