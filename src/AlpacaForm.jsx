import React, { useState } from 'react';
import './AlpacaForm.css';

const AlpacaForm = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    stateProvince: '',
    country: '',
    alpacaColors: []
  });

  // Available alpaca colors
  const alpacaColorOptions = [
    'White', 
    'Brown', 
    'Black', 
    'Beige', 
    'Gray', 
    'Caramel'
  ];

  // Handle input changes for text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle checkbox changes for alpaca colors
  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      alpacaColors: checked 
        ? [...prevState.alpacaColors, value]
        : prevState.alpacaColors.filter(color => color !== value)
    }));
  };

  return (
    <div className="form-container">
      <h2>Alpaca Details Form</h2>
      
      <form>
        {/* First Name Input */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name Input */}
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
          />
        </div>

        {/* Street Address Input */}
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            placeholder="Enter street address"
          />
        </div>

        {/* State/Province Input */}
        <div className="form-group">
          <label>State/Province</label>
          <input
            type="text"
            name="stateProvince"
            value={formData.stateProvince}
            onChange={handleInputChange}
            placeholder="Enter state or province"
          />
        </div>

        {/* Country Input */}
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Enter country"
          />
        </div>

        {/* Alpaca Colors Checkboxes */}
        <div className="form-group">
          <label>Favorite Alpaca Colors</label>
          {alpacaColorOptions.map(color => (
            <div key={color} className="checkbox-group">
              <input
                type="checkbox"
                id={color}
                name="alpacaColors"
                value={color}
                checked={formData.alpacaColors.includes(color)}
                onChange={handleColorChange}
              />
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </form>

      {/* Form Data Display */}
      <div className="form-summary">
        <h3>Submitted Details</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Street Address:</strong> {formData.streetAddress}</p>
        <p><strong>State/Province:</strong> {formData.stateProvince}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>Favorite Alpaca Colors:</strong> {formData.alpacaColors.join(', ') || 'None selected'}</p>
      </div>
    </div>
  );
};

export default AlpacaForm;