import React, { useState } from 'react';

  const cars = [
    { id: 1, name: 'Toyota Corolla', price: 50, image: 'toyota_corolla.avif' },
    { id: 2, name: 'Honda Civic', price: 60, image: 'Honda-CivicSport.webp' },
    { id: 3, name: 'Ford Mustang', price: 80, image: '2024_Ford_Mustang.jpg' },
    // Add more cars with their respective images
    { id: 4, name: 'BMW X5', price: 100, image: 'bmw-x5.jpg' },
    { id: 5, name: 'Mercedes-Benz E-Class', price: 120, image: 'front-left-side-47.jpg' },
    { id: 6, name: 'Audi Q7', price: 110, image: 'front-left-side-47.webp' },
    { id: 7, name: 'Chevrolet Camaro', price: 90, image: 'singapore7.webp' },
    { id: 8, name: 'Volkswagen Golf', price: 70, image: '20230602055539_2.jpg' },
    { id: 9, name: 'Tesla Model 3', price: 150, image: 'VXctesla.jpg' },
    { id: 10, name: 'Lexus RX', price: 130, image: '2016_Lexus_RX350_36.avif' },
    { id: 11, name: 'Subaru Outback', price: 80, image: 'outback+sport+xt.jpg' },
    { id: 12, name: 'Nissan Altima', price: 60, image: 'nissan.webp' },
    { id: 13, name: 'Mercedes-Benz E400', price: 60, image: 'mercedes.png' },
    { id: 14, name: 'Ferrari', price: 60, image: 'Ferrari.jpg' },
    { id: 15, name: 'Lamborghini Aventador', price: 60, image: 'Lambo1.png' }
  ];

  const CarNames = () => {
    const [selectedCar, setSelectedCar] = useState('');
  
    const handleCarChange = (event) => {
      setSelectedCar(event.target.value);
    };


  return (
    <div>
      <h1>Select a Car</h1>
      <select value={selectedCar} onChange={handleCarChange}>
        <option value="">Select a car...</option>
        {cars.map((car) => (
          <option key={car.id} value={car.name}>
            {car.name}
          </option>
        ))}
      </select>
      {selectedCar && (
        <div>
          <h2>Selected Car: {selectedCar}</h2>
          {/* You can add more details about the selected car here */}
        </div>
      )}
    </div>
  );
};

export {cars};
export default CarNames;
