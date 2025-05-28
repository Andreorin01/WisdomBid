import React from "react";
import Button from '@mui/material/Button';

function MyComponent() {
  return (
    <Button variant="contained" color="primary">
      Click Me
    </Button>
  );
}

export default MyComponent;

const Home = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to WisdomBid</h1>
      <p className="text-lg">
        Seek advice or provide answers and earn rewards. Start by signing up or logging in!
      </p>
    </div>
  );
};
import { signup, login } from "../services/authService";

// Example usage:
signup({ email, password, role })
  .then(data => { /* handle success */ })
  .catch(err => { /* handle error */ });

login({ email, password })
  .then(data => { /* handle success */ })
  .catch(err => { /* handle error */ });
<form onSubmit={handleSubmit}>
  <input
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="Email"
  />
  <input
    type="password"
    value={password}
    onChange={e => setPassword(e.target.value)}
    placeholder="Password"
  />
  <input
    type="text"
    value={role}
    onChange={e => setRole(e.target.value)}
    placeholder="Role"
  />
  <button type="submit">Sign Up</button>
</form>

export default Home;