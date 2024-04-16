import React from 'react';
import CarList from './carList'; // Assuming you have a CarList component

const CarPage = () => {
  return (
    <div className="container">
      <h1>Car Overviews</h1>
      <CarList /> {/* Render the CarList component */}
    </div>
  );
};

export default CarPage;
