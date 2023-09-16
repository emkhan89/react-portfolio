import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
