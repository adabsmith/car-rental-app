import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import CarouselComponent from './carousel';
import CarList from './carList';
import PaginationComponent from './pagination'; 
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <PrimaryNavbar /> */}
      <CarouselComponent />
      <CarList />
      <PaginationComponent />
      <Footer />
    </div>
  );
}

export default App;