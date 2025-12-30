import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Extract error message from backend
    const message = error.response?.data?.message || error.message || "Something went wrong";
    
    // Attach it to the error for easy access
    error.message = message;
    
    return Promise.reject(error);
  }
);

export default api;