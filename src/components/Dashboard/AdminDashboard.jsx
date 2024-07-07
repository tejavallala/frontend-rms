import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaList } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavigationBar.css'; // Create a CSS file for additional styling

const navbarStyle = {
  color: '#ffffff', // Light color for text/icons to contrast with the dark background
  padding: '10px 20px', // Padding to adjust the height of the navbar
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000, // Ensure it is above other content
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a slight shadow for depth
};

const linkStyle = {
  color: '#ffffff', // White text color for visibility
  marginRight: '20px', // Add some space between the links
  transition: 'color 0.3s ease-in-out', // Smooth transition for hover effect
};

const NavigationBar = () => {
  return (
    <div className="navbar-background">
      <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={linkStyle}>
            Restaurant Reservation System
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={linkStyle}>
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-restaurant" style={linkStyle}>
                  <FaPlus className="mr-2" /> Add Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booked-data" style={linkStyle}>
                  <FaList className="mr-2" /> Booked Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Restuarnt-List" style={linkStyle}>
                  <FaList className="mr-2" /> Restaurant List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
