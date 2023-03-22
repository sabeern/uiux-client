import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row style={{ color: "white", background: "black", paddingTop: "35px" }}>
      <Col md={12}>
        <Container>
          <Row>
            <Col md={4}>
              <h4>Contact Us</h4>
              <p>hi we are always</p>
              <Row>
                <Col md={6}>
                  <p>phone</p>
                </Col>
                <Col md={6}>
                  <p>address</p>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <h4>Information</h4>
            </Col>
            <Col md={2}>
              <h4>Information</h4>
            </Col>
            <Col md={4}>
              <h4>Information</h4>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

export default Footer;
