import React from "react";
import "./style.css";
import Navbar from "../../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <img
            src="./src/assets/mohsin-avatar.png"
            alt="mohsin-avatar"
            id="avatar"
          />
          <h1 className="display-5 fw-bold" id="about">
            Hello World, I'm Mohsin!
          </h1>
          <h2 id="msg">
            <b>Welcome to my portfolio site</b>
          </h2>

          <h3 className="sub">
            <b>I'm a Junior Front End Web Developer!</b>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
