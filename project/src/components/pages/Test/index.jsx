import React from "react";
import Navbar from "../../Navbar";

function Test() {
  return (
    <>
      <Navbar />
      <h1>this now wotkds</h1>
      <button type="button" class="btn">
        Base class
      </button>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Test;
