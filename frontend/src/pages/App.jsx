import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import AdvicePage from "./AdvicePage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advice" element={<AdvicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;