import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      {/* add cards below */}
      <Footer />
    </div>
  );
}

export default App;
