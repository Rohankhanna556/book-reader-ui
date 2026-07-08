import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userApi } from "../services/api";
import {
  Container, Card, CardContent, Typography,
  TextField, Button, Stack
} from "@mui/material";

function Register() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefillEmail = params.get("email");

  const [form, setForm] = useState({
    username: "",
    email: prefillEmail || "",
    password: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await userApi.post("/register", form);
      alert("Registered successfully: " + res.data.username);
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Account
          </Typography>
          {prefillEmail && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              We didn’t find an account for {prefillEmail}. Please register to continue.
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Username" name="username"
                value={form.username} onChange={handleChange} fullWidth />
              <TextField label="Email" name="email"
                value={form.email} onChange={handleChange} fullWidth />
              <TextField label="Password" type="password" name="password"
                value={form.password} onChange={handleChange} fullWidth />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
            </Stack>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already registered? <Link to="/login">Login here</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;
