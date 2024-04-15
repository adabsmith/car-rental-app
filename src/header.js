import React from 'react';
import CarBooking from './carbooking';
import { Link } from 'react-router-dom'
import "./Nabvar.css"

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top " >
        <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{ marginLeft:'10px'}}> <b>Rent a Car</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
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
      <button className="btn btn-dark my-2 my-sm-0 ml-3" style={{ marginRight:'10px', marginLeft:'500px'}} id='book'>Book Now</button>
    </a>
    </div>
    </nav>
  );
}

export default CustomNavbar;
