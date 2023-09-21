import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
// import ChallengesCard from "./components/ChallengesCard/index";
// import challenges from "./challenges.json";

import Home from "./components/pages/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
