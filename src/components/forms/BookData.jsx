import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../css/BookedDataPage.css'; 

const BookedDataPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await Axios.get("https://backend-rms.onrender.com/rest/all");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings data:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Booked Data</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>restaurantName</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Check-In Date</th>
              <th>Check-In Time</th>
              <th>Check-Out Date</th>
              <th>Check-Out Time</th>
              <th>Number of Seats</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.userName}</td>
                <td>{booking.restaurantName}</td>
                <td>{booking.userMobileNumber}</td>
                <td>{booking.email}</td>
                <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
                <td>{booking.checkInTime}</td>
                <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                <td>{booking.checkOutTime}</td>
                <td>{booking.numberOfSeats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedDataPage;
