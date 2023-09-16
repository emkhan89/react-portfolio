import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <img
          src="./src/assets/mohsin-avatar.png"
          alt="mohsin-avatar"
          id="avatar"
        />
        <h1 className="display-5 fw-bold">Hello World, I'm Mohsin!</h1>

        <h3>
          <b>I'm a Junior Front End Web Developer!</b>
        </h3>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
