import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import CarouselComponent from './carousel';
import CarList from './carList';
import PaginationComponent from './pagination';
import Accordion from './faq'; // Importing the Accordion component
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarRentForm from './carbooking';
import { Team } from './Team';
import CarNames from './carnames';
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";




function App() {


  return (
    <div className="App">
      <Header /> {/* <PrimaryNavbar /> */}
      <CarouselComponent />
      <CarRentForm/> 
      <CarList />
      <PaginationComponent/>
      <Accordion /> {/* Rendering the Accordion component */}
      <Team/>
      {/* <CarNames/> */}
      <Footer/>
    </div>
  );
};


export default App;