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

export default Home;