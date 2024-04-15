import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h5>Explore</h5>
            <ul className="list-unstyled text-white" id='links'>
              <li><a href="/">Home</a></li>
              <li><a href="/cars">Cars</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/car-booking">Book a Car</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: group10@humber.ca </p>
            <p>Phone: +1 123 456 7000</p>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Car Rental</p>
          </div>
          <div className="col-md-6 text-right">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
