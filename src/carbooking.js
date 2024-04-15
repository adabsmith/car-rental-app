import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarNames from './carnames';
import { cars } from './carnames';

const CarRentForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    pickupDate: '',
    returnDate: ''
  });
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState('');

  const [selectedCar, setSelectedCar] = useState('');


  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };


  useEffect(() => {
    if (formData.pickupLocation && focusedInput === 'pickupLocation') {
      fetchSuggestions(formData.pickupLocation, setPickupSuggestions);
    }
    if (formData.dropOffLocation && focusedInput === 'dropOffLocation') {
      fetchSuggestions(formData.dropOffLocation, setDropOffSuggestions);
    }
  }, [formData.pickupLocation, formData.dropOffLocation, focusedInput]);

  const fetchSuggestions = async (query, setSuggestions) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=e965e52dcafc4100b24dc09028f324b7&limit=5`);
      const suggestions = response.data.results.map((result) => result.formatted);
      setSuggestions(suggestions);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
      setLoading(false);
    }
  };

  const handleAutocomplete = (inputName, value) => {
    setFormData({ ...formData, [inputName]: value });
    setPickupSuggestions([]); // Close pickup location dropdown
    setDropOffSuggestions([]); // Close drop-off location dropdown
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Fetch suggestions when typing in the pickup or drop-off location fields
    if (name === 'pickupLocation' || name === 'dropOffLocation') {
      setFocusedInput(name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending a request to the server
    console.log(formData);
    alert('Rental request submitted successfully!');
    // Reset form fields
    setFormData({
      pickupLocation: '',
      dropOffLocation: '',
      pickupDate: '',
      returnDate: ''
    });
  };

  return (
    <div className="container bg-dark rounded">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pickup Location:</label>
          <input
            type="text"
            className="form-control"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            onFocus={() => setFocusedInput('pickupLocation')}
            placeholder="Enter Pickup Location"
            autoComplete="off"
            required
          />
          {loading && <div className="autocomplete-suggestions">Loading...</div>}
          {pickupSuggestions.length > 0 && focusedInput === 'pickupLocation' && (
            <ul className="list-group autocomplete">
              {pickupSuggestions.map((suggestion, index) => (
                <li key={index} className="list-group-item" onClick={() => handleAutocomplete('pickupLocation', suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="form-group">
          <label>Drop-off Location:</label>
          <input
            type="text"
            className="form-control"
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={handleChange}
            onFocus={() => setFocusedInput('dropOffLocation')}
            placeholder="Enter Drop-off Location"
            autoComplete="off"
            required
          />
          {loading && <div className="autocomplete-suggestions">Loading...</div>}
          {dropOffSuggestions.length > 0 && focusedInput === 'dropOffLocation' && (
            <ul className="list-group autocomplete">
              {dropOffSuggestions.map((suggestion, index) => (
                <li key={index} className="list-group-item" onClick={() => handleAutocomplete('dropOffLocation', suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label>Pickup Date:</label>
              <input
                type="date"
                className="form-control"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label>Return Date:</label>
              <input
                type="date"
                className="form-control"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="form-group" >
              <label style={{width:'100%'}}>Selected Car:</label>
              <select value={selectedCar} onChange={handleCarChange}>
        <option value="">Select a car...</option>
        {cars.map((car) => (
          <option key={car.id} value={car.name}>
            {car.name}
          </option>
        ))}
      </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop:'20px', marginBottom:'20px'}}>Submit</button>
      </form>
    </div>
  );
};

export default CarRentForm;
