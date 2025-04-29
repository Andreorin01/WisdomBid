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
          <Link to="/advice">Post Advice</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;