import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [editing, setEditing] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('https://backend-rms.onrender.com/restaurant/all');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`https://backend-rms.onrender.com/restaurant/delete/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant._id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const handleUpdate = (restaurant) => {
    setEditing(restaurant);
    setShowModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { restaurantName, restaurantArea, phoneNumber, seatsAvailable } = editing;

    try {
      const response = await axios.put(`https://backend-rms.onrender.com/restaurant/update/${editing._id}`, {
        restaurantName,
        restaurantArea,
        phoneNumber,
        seatsAvailable
      });
      setRestaurants(restaurants.map((restaurant) =>
        restaurant._id === editing._id ? response.data.updatedRestaurant : restaurant
      ));
      setEditing({});
      setShowModal(false);
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{restaurant.restaurantName}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {restaurant.restaurantArea}<br />
                  <strong>Phone:</strong> {restaurant.phoneNumber}<br />
                  <strong>Seats Available:</strong> {restaurant.seatsAvailable}
                </p>
                <button className="btn btn-warning me-2" onClick={() => handleUpdate(restaurant)}>Update</button>
                <button className="btn btn-danger" onClick={() => deleteRestaurant(restaurant._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Restaurant</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Restaurant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editing.restaurantName || ''}
                    onChange={(e) => setEditing({ ...editing, restaurantName: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editing.restaurantArea || ''}
                    onChange={(e) => setEditing({ ...editing, restaurantArea: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editing.phoneNumber || ''}
                    onChange={(e) => setEditing({ ...editing, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Seats Available</label>
                  <input
                    type="number"
                    className="form-control"
                    value={editing.seatsAvailable || ''}
                    onChange={(e) => setEditing({ ...editing, seatsAvailable: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Save Changes</button>
                <button type="button" className="btn btn-secondary" onClick={() => { setEditing({}); setShowModal(false); }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
      {/* End Bootstrap Modal */}
    </div>
  );
};

export default RestaurantList;
