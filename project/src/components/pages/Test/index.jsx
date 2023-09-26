import React from "react";
import Navbar from "../../Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Test() {
  return (
    <>
      <Navbar />
      <h1>this now wotkds</h1>
      <button type="button" class="btn">
        Base class
      </button>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Test;
