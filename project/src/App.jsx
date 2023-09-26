import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
// import ChallengesCard from "./components/ChallengesCard";
import Test from "./components/pages/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's
import Coach from "./components/Coach";

// import ChallengesCard from "./components/ChallengesCard/index";
// import challenges from "./challenges.json";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="coach" element={<Coach />}></Route>
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
