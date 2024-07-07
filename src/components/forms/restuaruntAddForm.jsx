import React, { useState } from "react";
import Axios from "axios";
import { AiOutlineHome, AiOutlinePhone, AiOutlineFieldNumber } from "react-icons/ai";
import '../css/AdminDashboard.css';

const RestaurantAddForm = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantArea, setRestaurantArea] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://backend-rms.onrender.com/restaurant/add",
        {
          restaurantName,
          restaurantArea,
          phoneNumber,
          seatsAvailable,
        }
      );

      if (response.status === 201) {
        alert("Added successfully");
        setRestaurantName("");
        setRestaurantArea("");
        setPhoneNumber("");
        setSeatsAvailable("");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred while adding the restaurant.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow">
        <div className="form-group mb-3">
          <label htmlFor="formRestaurantName" className="form-label d-flex align-items-center">
            <AiOutlineHome className="me-2" /> Restaurant Name
          </label>
          <input
            type="text"
            id="formRestaurantName"
            className="form-control"
            placeholder="Enter restaurant name"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="formRestaurantArea" className="form-label d-flex align-items-center">
            <AiOutlineHome className="me-2" /> Restaurant Area
          </label>
          <input
            type="text"
            id="formRestaurantArea"
            className="form-control"
            placeholder="Enter restaurant area"
            value={restaurantArea}
            onChange={(e) => setRestaurantArea(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="formPhoneNumber" className="form-label d-flex align-items-center">
            <AiOutlinePhone className="me-2" /> Phone Number
          </label>
          <input
            type="tel"
            id="formPhoneNumber"
            className="form-control"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="formSeatsAvailable" className="form-label d-flex align-items-center">
            <AiOutlineFieldNumber className="me-2" /> Seats Available
          </label>
          <input
            type="text"
            id="formSeatsAvailable"
            className="form-control"
            placeholder="Enter number of seats available"
            value={seatsAvailable}
            onChange={(e) => setSeatsAvailable(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default RestaurantAddForm;
