import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light customNav">
      <a className="navbar-brand" href="#">
        <h4>
          <b>Mohsin Khan Ajmal</b>
        </h4>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              <h4>
                <b>About Me</b>
              </h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              <h4>
                <b>Work</b>
              </h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <h4>
                <b>Contact Me</b>
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
