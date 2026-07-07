import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userApi } from "../services/api";
import "./Auth.css"; // shared styles

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // ✅ Correct path: /register (baseURL already has /api/users)
      const res = await userApi.post("/register", form);
      alert("Registered successfully: " + res.data.username);
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
        <button className="google-btn">Sign in with Google</button>
        <p>Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
