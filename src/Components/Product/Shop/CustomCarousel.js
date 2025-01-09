
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CustomCarousel.css'

const CustomCarousel = ({ slides }) => {
    return (
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              src={slide.image}
              alt={slide.altText}
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  export default CustomCarousel