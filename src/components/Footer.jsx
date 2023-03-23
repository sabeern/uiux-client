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
              <p className="footer-font">
                Hi, we are always open for cooperation and suggestions,
                <br />
                contact us in one of the ways below:
              </p>
              <Row>
                <Col sm={6}>
                  <p className="footer-font">PHONE NUMBER</p>
                  <p>08925297807</p>
                  <p className="footer-font">OUR LOCATION</p>
                  <p>
                    102, Athipalayam Rd
                    <br />
                    Ramakrisnapuram
                    <br />
                    Chinnavadampetti
                    <br />
                    Coimbatore, Tamil Nadu
                    <br />
                    641049
                  </p>
                </Col>
                <Col sm={6}>
                  <p className="footer-font">EMAIL ADDRESS</p>
                  <p>careers@uitouxsolutions.com</p>
                  <p className="footer-font">WORKING HOURS</p>
                  <p>Mon-Fri 10:00pm - 6:00pm</p>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <h4>Information</h4>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>
            </Col>
            <Col md={2}>
              <h4>My Account</h4>
              <ul>
                <li>Store Location</li>
                <li>Order History</li>
                <li>Wishlist</li>
                <li>Newsletter</li>
                <li>Special Offers</li>
                <li>Gift Certificates</li>
                <li>Affliate</li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>Newsletter</h4>
              <p className="footer-font">
                Enter your email address below to subscribe our news letter
                <br />
                and keep up to date with discounts and special offers.
              </p>
              <input
                tyep="text"
                placeholder="user@example.com"
                style={{
                  background: "#6F6E70",
                  width: "250px",
                  height: "35px",
                }}
              />
              <button type="button" class="btn btn-success">
                Subscribe
              </button>
              <p className="footer-font">Follow us on social networks</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

export default Footer;
