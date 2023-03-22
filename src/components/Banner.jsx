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
          />
        </Col>
        <Col md={6}>
          <img
            src="https://res.cloudinary.com/dyff453oq/image/upload/v1679480729/ulux/banner1_mbgzo7.jpg"
            alt="Motor oil"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
