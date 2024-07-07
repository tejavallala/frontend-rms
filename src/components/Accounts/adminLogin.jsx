import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BiHome } from "react-icons/bi";

const Admin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://backend-rms.onrender.com/adminRoute/login",
        { email, password }
      );

      if (response.status === 200) {
        navigate("/AdminDashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred while logging in.");
    }
  };

  return (
    <div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#333",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "40px",
            height: "40px",
            backgroundColor: "#ddd",
            marginRight: "10px",
          }}
        >
          <BiHome size={30} style={{ margin: "5px", color: "#555" }} />
        </div>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Home</span>
      </Link>
      <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="row p-5 bg-white shadow rounded">
            <div className="col-lg-6 text-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx48HuDHV_ABkx1viDU8oVsuOk9RS7Ei1MPwcSNOFlNhbxCRteQc7ZfAmAjLtkGKarRgg&usqp=CAU"
                alt=""
                height={150}
                width={150}
              />
              <h1 className="mt-3">Admin Login</h1>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <form className="mb-4 text-center" onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                {error && <div className="text-danger mt-3">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
