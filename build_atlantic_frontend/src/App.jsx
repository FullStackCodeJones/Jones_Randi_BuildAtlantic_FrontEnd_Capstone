import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin"; // Import the Admin page
import axios from "axios";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />{" "}
          {/* Admin dashboard route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
