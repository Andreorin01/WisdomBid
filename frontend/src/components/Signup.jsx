import React, { useState, useEffect } from "react";
import { signup } from "../services/authService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, password, role);
      alert("Signup successful! Please log in.");
      setEmail("");
      setPassword("");
      setRole("seeker");
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="seeker">Seeker</option>
        <option value="giver">Giver</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default Signup;