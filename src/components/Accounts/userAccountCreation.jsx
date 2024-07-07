import React, { useState } from "react";
import Axios from "axios";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
} from "react-icons/ai";

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await Axios.post(
            "https://backend-rms.onrender.com/userRoute/create-user",
            { name, email, password, phoneNumber }
        );
        if (response.status === 200) {
            alert("Account created successfully");
        }
    } catch (error) {
        alert(error.response.data.error); // Display error message in an alert
    }
};


  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#fff0f5" }}
    >
      <div className="col-lg-6">
        <div
          className="p-4 bg-danger text-white rounded shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="mb-4 text-center">Register Here</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
              <span className="mr-2">
                <AiOutlineUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <span className="mr-2">
                <AiOutlineMail />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <span className="mr-2">
                <AiOutlineLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <span className="mr-2">
                <AiOutlinePhone />
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
