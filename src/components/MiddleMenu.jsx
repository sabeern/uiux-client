import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { AiFillCar, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";

function MiddleMenu() {
  return (
    <Container>
      <Row style={{ marginLeft: "8px" }}>
        <Col md={7}>
          <img
            src="https://res.cloudinary.com/dyff453oq/image/upload/v1679456573/ulux/logo_dbnq1w.png"
            alt="uitoux solutions"
            className="logo"
          />
          <DropdownButton
            as="Warning"
            variant="warning"
            title={
              <>
                <AiFillCar />
                select vehicle
              </>
            }
            className="mx-3"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
          <span className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Enter Keyword or Part Number"
            />
            <button className="search-btn">
              <AiOutlineSearch />
            </button>
          </span>
        </Col>
        <Col md={5}>
          <span
            style={{ display: "flex", alignItems: "center", float: "right" }}
          >
            <AiOutlineHeart style={{ width: "30px", height: "30px" }} />
            <span
              className="badge rounded-pill float-left"
              style={{
                marginLeft: "-10px",
                background: "#01E7D0",
              }}
            >
              3
            </span>

            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679463785/ulux/person_r9762c.svg"
              alt="person"
              className="person-image"
            />
            <span style={{ marginLeft: "10px" }}>
              <span style={{ fontSize: "12px", color: "#686868" }}>
                Hello, Log In
              </span>
              <br />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                My Account
              </span>
            </span>
            <img
              src="https://res.cloudinary.com/dyff453oq/image/upload/v1679464450/ulux/cart_bmly8z.svg"
              alt="cart"
              className="person-image"
            />
            <span
              className="badge rounded-pill float-left"
              style={{
                marginLeft: "-10px",
                background: "#01E7D0",
              }}
            >
              7
            </span>
            <span style={{ marginLeft: "10px" }}>
              <span style={{ fontSize: "12px", color: "#686868" }}>
                Shopping Cart
              </span>
              <br />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                ₹ 1468.60
              </span>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MiddleMenu;
