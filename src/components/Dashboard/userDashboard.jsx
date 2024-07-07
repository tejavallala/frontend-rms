import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { AiOutlinePhone, AiOutlineFieldNumber } from "react-icons/ai";
import { MdRestaurant, MdLocationOn } from "react-icons/md";
import '../css/RestaurantDashboard.css';

const RestaurantDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await Axios.get("https://backend-rms.onrender.com/restaurant/all");
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) =>
        restaurant.restaurantName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, restaurants]);

  const handleBookClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    document.getElementById("restaurantNameInput").value = restaurant.restaurantName;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const restaurantName = document.getElementById("restaurantNameInput").value;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const checkInDate = document.getElementById("checkInDate").value;
    const checkInTime = document.getElementById("checkInTime").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const checkOutTime = document.getElementById("checkOutTime").value;
    const numberOfSeats = document.getElementById("seats").value;

    try {
      await Axios.post("https://backend-rms.onrender.com/rest/add", {
        userName: name,
        userMobileNumber: phoneNumber,
        phonenumber: phoneNumber,
        email,
        numberOfSeats,
        restaurantName,
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime
      });
      alert("Booking successful");
      // Optionally clear the form
      document.getElementById("bookingForm").reset();
      // Close the modal
      const modal = modalRef.current;
      if (modal) {
        const bsModal = new window.bootstrap.Modal(modal);
        bsModal.hide();
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Error occurred while booking.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Restaurant Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by restaurant name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {filteredRestaurants.map((restaurant, index) => (
          <div className="col-md-4 mb-4" key={restaurant._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <MdRestaurant className="me-2" /> {restaurant.restaurantName}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <MdLocationOn className="me-2" /> {restaurant.restaurantArea}
                </h6>
                <p className="card-text">
                  <AiOutlinePhone className="me-2" /> Phone: {restaurant.phoneNumber}
                </p>
                <p className="card-text">
                  <AiOutlineFieldNumber className="me-2" /> Seats Available: {restaurant.seatsAvailable}
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                  onClick={() => handleBookClick(restaurant)}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookingModalLabel">Booking Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="bookingForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="restaurantNameInput"
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkInDate" className="form-label">Check-In Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkInDate"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkInTime" className="form-label">Check-In Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="checkInTime"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOutDate" className="form-label">Check-Out Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkOutDate"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOutTime" className="form-label">Check-Out Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="checkOutTime"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="seats" className="form-label">Number of Seats</label>
                  <input
                    type="number"
                    className="form-control"
                    id="seats"
                    placeholder="Enter number of seats"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
