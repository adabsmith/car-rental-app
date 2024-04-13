import React from 'react';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary " >
      <a className="navbar-brand" href="/" style={{ marginLeft:'10px'}}>Rent a Car</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cars">Cars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Team</a>
          </li>
        </ul> 
      </div>
      <button className="btn bg-dark my-2 my-sm-0 ml-3 d-flex justify-content-end" style={{ marginRight:'10px'}}>Book Now</button>
    </nav>
  );
}

export default CustomNavbar;
