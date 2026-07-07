import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../services/api";
import "./Auth.css"; // shared styles

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // ✅ Correct path: /login (baseURL already has /api/auth)
      const res = await authApi.post("/login", {
        username: form.username,
        password: form.password
      });

      if (res.data && res.data !== "Invalid credentials") {
        alert("Login successful!");
        localStorage.setItem("token", res.data); // store JWT
        window.location.href = "/books";
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <button className="google-btn">Sign in with Google</button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
