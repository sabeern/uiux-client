import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Service() {
  return (
    <Container style={{ paddingBottom: "50px" }}>
      <Row>
        <Col md={3}>
          <span
            style={{ display: "flex", alignItems: "center", padding: "8px" }}
          >
            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679549171/ulux/free-delivery_rdy2zr.svg"
              alt="service"
            />
            <span style={{ marginLeft: "10px" }}>
              <span className="service-text">Free Shipping</span>
              <br />
              <span className="service-text-second">for order from $50</span>
            </span>
          </span>
        </Col>
        <Col md={3}>
          <span
            style={{ display: "flex", alignItems: "center", padding: "8px" }}
          >
            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679486266/ulux/24-hours_szzubv.svg"
              alt="service"
            />
            <span style={{ marginLeft: "10px" }}>
              <span className="service-text">Support 24/7</span>
              <br />
              <span className="service-text-second">Call us anytime</span>
            </span>
          </span>
        </Col>
        <Col md={3}>
          <span
            style={{ display: "flex", alignItems: "center", padding: "8px" }}
          >
            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679549218/ulux/payment-security_d5a9xl.svg"
              alt="service"
            />
            <span style={{ marginLeft: "10px" }}>
              <span className="service-text">100% Safety</span>
              <br />
              <span className="service-text-second">Only secure payments</span>
            </span>
          </span>
        </Col>
        <Col md={3}>
          <span
            style={{ display: "flex", alignItems: "center", padding: "8px" }}
          >
            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679549287/ulux/tag_qshub9.svg"
              alt="service"
            />
            <span style={{ marginLeft: "10px" }}>
              <span className="service-text">Hot Offers</span>
              <br />
              <span className="service-text-second">Discounts up to 90%</span>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Service;
