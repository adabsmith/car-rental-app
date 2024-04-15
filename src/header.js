import React from 'react';
import CarBooking from './carbooking';
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top " >
      <a className="navbar-brand" href="/" style={{ marginLeft:'10px'}}>Rent a Car</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cars">Cars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Team">Team</a>
          </li>
        </ul> 
      </div>
      <a href ='/carbooking' style={{textDecoration:"none"}}>
      <button className="btn btn-dark my-2 my-sm-0 ml-3 d-flex justify-content-end" style={{ marginRight:'10px'}}>Book Now</button>
    </a>
    </nav>
  );
}

export default CustomNavbar;
