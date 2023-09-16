import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light customNav">
      <a className="navbar-brand" href="#">
        <b>Mohsin Khan Ajmal</b>
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
              <b>About Me</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              <b>Work</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <b>Contact Me</b>{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
