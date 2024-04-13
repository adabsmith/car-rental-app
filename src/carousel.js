import React from 'react';
import mustangImage from './mustang.jpg';
import bentleyImage from './bmw.jpg';
import GrenadierImage from './Grenadier.jpg';

function CarouselComponent() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{height: '650px'}}>
        <div className="carousel-item active">
        <img src={GrenadierImage} className="d-block w-100" alt="Slide 1" style={{ height: '100%'}} />
        </div>
        <div className="carousel-item">
          <img src={bentleyImage} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={mustangImage} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;