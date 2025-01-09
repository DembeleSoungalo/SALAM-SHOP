import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Carousels = ({imgSrc1,imgSrc2,imgSrc3,imgAlt1,imgAlt2,imgAlt3}) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#img1"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#img2"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={imgSrc1} className="d-block w-100" alt={imgAlt1} id="img1"/>
      </div>
      <div className="carousel-item">
        <img src={imgSrc2} className="d-block w-100" alt={imgAlt2} id="img2"/>
      </div>
      <div className="carousel-item">
        <img src={imgSrc3} className="d-block w-100" alt={imgAlt3} id="img3"/>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Carousels