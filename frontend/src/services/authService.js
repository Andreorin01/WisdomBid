import axios from "axios";

//const API_URL = "http://localhost:8000/auth"; // Replace with your backend URL if different
const API_URL = process.env.REACT_APP_API_URL; // For Create React App

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");
// Example fetch:
fetch(`${API_URL}/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password, role }),
});

// Signup API call
//export const signup = async (email, password, role) => {
//  try {
//    const response = await axios.post(`${API_URL}/signup`, { email, password, role });
//    return response.data;
//  } catch (error) {
//    console.error("Signup failed:", error.response?.data || error.message);
//    throw error;
//  }
//};

// Login API call
//export const login = async (email, password) => {
//  try {
//    const response = await axios.post(`${API_URL}/login`, { email, password });
//    localStorage.setItem("token", response.data.access_token); // Save token to localStorage
//    return response.data;
//  } catch (error) {
//    console.error("Login failed:", error.response?.data || error.message);
//    throw error;
//  }
//};

/**
 * Sign up a new user.
 * @param {Object} userData - { email, password, role }
 * @returns {Promise<Object>} The response data.
 */
export async function signup(userData) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error((await response.json()).detail || "Signup failed");
  }
  return response.json();
}

/**
 * Log in a user.
 * @param {Object} userData - { email, password }
 * @returns {Promise<Object>} The response data.
 */
export async function login(userData) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error((await response.json()).detail || "Login failed");
  }
  return response.json();
}

const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role }),
  })
    .then((res) => res.json())
    .then((data) => {
      // handle response (e.g., show a message or redirect)
    });
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
