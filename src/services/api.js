import axios from "axios";

// Auth service (login)
export const authApi = axios.create({
  baseURL: "http://localhost:8464/api/auth"
});

// User service (register, validate)
export const userApi = axios.create({
  baseURL: "http://localhost:8081/api/users"
});

// Book service (protected endpoints)
export const bookApi = axios.create({
  baseURL: "http://localhost:8464"
});

// Attach JWT to protected requests
[bookApi, userApi].forEach(api => {
  api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
});
