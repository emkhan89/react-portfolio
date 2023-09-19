import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
import ChallengesCard from "./components/ChallengesCard/index";
// import challenges from "./challenges.json";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
