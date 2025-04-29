import axios from "axios";

const API_URL = "http://localhost:8000/auth"; // Replace with your backend URL if different

// Signup API call
export const signup = async (email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password, role });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};

// Login API call
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data.access_token); // Save token to localStorage
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch protected data
export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Fetching protected data failed:", error.response?.data || error.message);
    throw error;
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Returns true if a token exists, false otherwise
};