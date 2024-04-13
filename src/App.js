import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import CarList from './carList';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CarList />
      <Footer />
    </div>
  );
}

export default App;