import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserShield } from 'react-icons/fa'; // Import icons from react-icons
import backgroundImage from '../Dashboard/bg-bunner-2.jpg'; // Adjust the path as per your project structure
import 'bootstrap/dist/css/bootstrap.min.css';

const NewNavigationBar = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Cover full viewport height
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  };

  const navbarStyle = {
    backgroundColor: '#000000', // Black background color for the navbar
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000, // Ensure navbar is above other content
  };

  const reservationContainerStyle = {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark semi-transparent background
    borderRadius: '8px',
    color: 'white',
  };

  const reservationTitleStyle = {
    fontSize: '75px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: 'black',
  };

  const reservationTextStyle = {
    fontSize: '1.2rem',
    color: '#f8f9fa', // Light color for text to contrast with dark background
  };

  const linkStyle = {
    color: '#ffffff', // White text color for links
  };

  const linkHoverStyle = {
    color: '#ffc107', // Yellow color on hover
  };

  return (
    <div style={containerStyle}>
      <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Align items to the right */}
            <li className="nav-item">
              <Link className="nav-link font-weight-bold" to="/user-login" style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = linkStyle.color}>
                <FaUser className="mr-2" /> <span style={{ fontSize: '1.2rem' }}>User Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bold" to="/admin-login" style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = linkStyle.color}>
                <FaUserShield className="mr-2" /> <span style={{ fontSize: '1.2rem' }}>Admin Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2 style={reservationTitleStyle}>Welcome to Restaurant Reservation System</h2>
      <div style={reservationContainerStyle}>
        <p style={reservationTextStyle}>
          To make your dining experience even more enjoyable, we offer a seamless reservation system. You can easily book a table online and select the best time to visit us. Our reservation system allows you to choose from a variety of dining options and ensures that you have a spot waiting for you when you arrive. For more details and to make a reservation, please visit our <Link to="/reservations" style={{ color: '#ffc107' }}>Reservations Page</Link>.
        </p>
      </div>
      <div className="container mt-5">
        <form className="row g-3 bg-light p-3 rounded shadow">
          <div className="col-md-2">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Your name" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Your phone number" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputDate" className="form-label">Date</label>
            <input type="date" className="form-control" id="inputDate" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputPeople" className="form-label">No. of People</label>
            <select id="inputPeople" className="form-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="submit" className="btn btn-dark w-100">Check Availability</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNavigationBar;
