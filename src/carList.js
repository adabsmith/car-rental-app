import React from 'react';

const CarList = () => {
  const cars = [
    { id: 1, name: 'Toyota Corolla', price: 50, image: 'toyota_corolla.jpg' },
    { id: 2, name: 'Honda Civic', price: 60, image: 'honda_civic.jpg' },
    { id: 3, name: 'Ford Mustang', price: 80, image: 'ford_mustang.jpg' },
    // Add more cars with their respective images
    { id: 4, name: 'BMW X5', price: 100, image: 'bmw_x5.jpg' },
    { id: 5, name: 'Mercedes-Benz E-Class', price: 120, image: 'mercedes_e_class.jpg' },
    { id: 6, name: 'Audi Q7', price: 110, image: 'audi_q7.jpg' },
    { id: 7, name: 'Chevrolet Camaro', price: 90, image: 'chevrolet_camaro.jpg' },
    { id: 8, name: 'Volkswagen Golf', price: 70, image: 'vw_golf.jpg' },
    { id: 9, name: 'Tesla Model 3', price: 150, image: 'tesla_model_3.jpg' },
    { id: 10, name: 'Lexus RX', price: 130, image: 'lexus_rx.jpg' },
    { id: 11, name: 'Subaru Outback', price: 80, image: 'subaru_outback.jpg' },
    { id: 12, name: 'Nissan Altima', price: 60, image: 'nissan_altima.jpg' }
  ];

  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <div className="car-grid">
        {cars.map(car => (
          <div className="car-card" key={car.id}>
            <img src={`/images/cars/${car.image}`} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Price: ${car.price}/day</p>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
