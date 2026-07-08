import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../services/api";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await authApi.post("/login", form);
      if (res.data && res.data !== "Invalid credentials") {
        localStorage.setItem("token", res.data);
        window.location.href = "/books";
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8464/oauth2/authorization/google";
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome Back
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                fullWidth
              >
                Sign in with Google
              </Button>
            </Stack>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don’t have an account? <Link to="/register">Register here</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
