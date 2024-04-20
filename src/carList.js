import React, { useState } from 'react';

const CarList = () => {
  const cars = [
    { id: 1, name: 'Toyota Corolla', price: 50, image: 'toyota_corolla.avif' },
    { id: 2, name: 'Honda Civic', price: 60, image: 'Honda-CivicSport.webp' },
    { id: 3, name: 'Ford Mustang', price: 80, image: '2024_Ford_Mustang.jpg' },
    // Add more cars with their respective images
    { id: 4, name: 'BMW X5', price: 100, image: 'bmw-x5.jpg' },
    { id: 5, name: 'Mercedes-Benz', price: 120, image: 'front-left-side-47.jpg' },
    { id: 6, name: 'Audi Q7', price: 110, image: 'front-left-side-47.webp' },
    { id: 7, name: <h5>Chevrolet Camaro</h5>, price: 90, image: 'singapore7.webp' },
    { id: 8, name: 'Volkswagen Golf', price: 70, image: '20230602055539_2.jpg' },
    { id: 9, name: 'Tesla Model 3', price: 150, image: 'VXctesla.jpg' },
    { id: 10, name: 'Lexus RX', price: 130, image: '2016_Lexus_RX350_36.avif' },
    { id: 11, name: 'Subaru Outback', price: 80, image: 'outback+sport+xt.jpg' },
    { id: 12, name: 'Nissan Altima', price: 60, image: 'nissan.webp' },
    { id: 13, name: 'Mercedes-Benz E400', price: 60, image: 'mercedes.png' },
    { id: 14, name: 'Ferrari', price: 60, image: 'Ferrari.jpg' },
    { id: 15, name: 'Lamborghini Aventador', price: 60, image: 'Lambo1.png' }, 
    { id: 16, name: 'Porsche Turbo', price: 110, image: 'Porsche-911.avif' }, 

  ];
 
  
  const [flippedCard, setFlippedCard] = useState(null);

  const handleOverviewClick = (id) => {
    setFlippedCard(id === flippedCard ? null : id);
  };

  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <div className={`car-card ${flippedCard === car.id ? 'flip' : ''}`} key={car.id}>
            <div className="car-card-inner">
              <div className="car-card-front">
                <img
                  src={`/images/cars/${car.image}`}
                  alt={`${car.name} car image`}
                  className="car-image"
                />
                <h3>{car.name}</h3>
                <p>Price: ${car.price}/day</p>
                <button type="button" onClick={() => handleOverviewClick(car.id)}>
                  Overview
                </button>
              </div>
              <div className="car-card-back">
                <p>Details about the car...</p>
                <button type="button" onClick={() => handleOverviewClick(car.id)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;