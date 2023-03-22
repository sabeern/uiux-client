import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function TopLeftMenu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="top-menu">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Contacts
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Store Location
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Track Order
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopLeftMenu;
