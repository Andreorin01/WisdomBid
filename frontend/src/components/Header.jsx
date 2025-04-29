import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-lavenderDark text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl font-bold">
          WisdomBid
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/advice" className="mr-4">
            Post Advice
          </Link>
          <Link to="/signup" className="mr-4">
            Signup
          </Link>
          <Link to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;