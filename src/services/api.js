import axios from "axios";

const BASE_URL = "http://localhost:8464"; // Gateway base

export const authApi = axios.create({ baseURL: `${BASE_URL}/api/auth` });
export const userApi = axios.create({ baseURL: `${BASE_URL}/user/api/users` });
export const bookApi = axios.create({ baseURL: `${BASE_URL}/book/api/books` });
export const chapterApi = axios.create({ baseURL: `${BASE_URL}/book/api/chapters` });
export const pageApi = axios.create({ baseURL: `${BASE_URL}/book/api/pages` });

// Attach token to all requests
[authApi, userApi, bookApi, chapterApi, pageApi].forEach(api => {
  api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
});

// Profile helper
export const getProfile = () => authApi.get("/me").then(res => res.data);
