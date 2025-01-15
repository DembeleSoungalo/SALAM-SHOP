
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CustomCarousel.css'

const CustomCarousel = ({ slides }) => {
    return (
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className=''>
            <div className="align-content-center d-block">
            <img
              src={slide.image}
              alt={slide.altText}
              className="d-block w-auto"
            />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  export default CustomCarousel