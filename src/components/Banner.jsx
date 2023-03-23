import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col md={6}>
          <img
            src="https://res.cloudinary.com/dyff453oq/image/upload/v1679480729/ulux/banner1_mbgzo7.jpg"
            alt="Motor oil"
            style={{ width: "100%", height: "auto" }}
            className="container"
          />
          <div className="banner-text">
            <p class="banner-text-head">Motor Oils</p>
            <p class="banner-text-para">
              Synthetic motor oil with free shipping
              <br />
              Friction free life guaranteed
            </p>
            <button type="button" class="btn btn-danger">
              Shop Now
            </button>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="https://res.cloudinary.com/dyff453oq/image/upload/v1679552059/ulux/banner2_byksda.jpg"
            alt="Motor oil"
            style={{ width: "100%", height: "auto" }}
            className="search-container"
          />
          <div className="center">
            <p class="banner-text-head">Motor Oils</p>
            <p class="banner-text-para">
              Synthetic motor oil with free shipping
              <br />
              Friction free life guaranteed
            </p>
            <button type="button" class="btn btn-danger">
              Shop Now
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
