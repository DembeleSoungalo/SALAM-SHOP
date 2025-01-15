import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Product/Header/Header';
import CustomCarousel from './Components/Product/Shop/CustomCarousel';
import Footer from './Components/Product/Shop/Footer/Footer';
import Spacer from './Components/Product/Shop/Spacer';
import SearchBar from './Components/Product/Header/SearchBar';
import { Col, Row ,Container} from 'react-bootstrap';
import ProductsList from './Components/Product/Shop/ProductsList';






function App() {
  const slides = [
    {
      image: "https://m.media-amazon.com/images/I/6128f-MlilL._AC_SX425_.jpg",
      altText: 'The new iPhone 16 Max',
      title: 'Some Article',
      description: 'The new iPhone 16 Max',
    },
    {
      image: "https://img.grouponcdn.com/deal/2kTfn4qYLDC6PVkNHfjwhJupwLDQ/2k-2000x1200/v1/t600x362.jpg",
      altText: 'The ',
      title: 'First Slide Title',
      description: 'First slide description',
    },
    {
      image: "https://img.grouponcdn.com/deal/2kTfn4qYLDC6PVkNHfjwhJupwLDQ/2k-2000x1200/v1/t600x362.jpg",
      altText: 'The ',
      title: 'First Slide Title',
      description: 'First slide description',
    }
   
  ];
  return (
    <div className="App">



   
    
    <Header />
    <Spacer height="2.5rem" />
  
    
      <CustomCarousel slides={slides} />
     
    <Spacer height="2.3rem" />
    <Row >
    <Col md={8} sm={12} lg={12}>
      <SearchBar/>
    </Col>
      
    </Row>
   
<Col>
  <ProductsList/>
</Col>

    
    <Spacer height="10rem" />
  
 <Footer/> 

    </div>
    
  );
}

export default App;
