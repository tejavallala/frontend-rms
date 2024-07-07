import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { BiHome } from "react-icons/bi";
import "../css/Loginform.css"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://backend-rms.onrender.com/userRoute/login",
        { email, password }
      );

      if (response.status === 200) {
        alert("Login successful");
        navigate("/Dashboard", { state: { userEmail: email } });
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
      <Link to="/" className="home-link">
        <div className="home-icon-container">
          <BiHome size={30} className="home-icon" />
        </div>
        <span className="home-text">Home</span>
      </Link>

      <div className="login-container">
        <div className="login-form-container">
          <div className="login-row">
            <div className="login-image-container">
              <img
                src=" data:image/png;base64,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"
                alt="Login"
                className="login-image"
              />
            </div>
            <div className="login-form-wrapper">
              <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Login</h2>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Log In
                </button>
                <div className="or-divider"></div>
                <div className="mt-3">
                  <p className="mb-2">
                    New user?{" "}
                    <Link to="/user-registration" className="text-primary">
                      Create an account
                    </Link>
                  </p>
                  <p className="mb-0">
                    <Link to="/forgot-password" className="text-primary">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
