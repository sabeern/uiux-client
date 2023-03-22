import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function TopRightMenu() {
  return (
    <Navbar bg="light" expand="lg" style={{ float: "right" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="top-menu">
              Comapny:<span className="top-span">2</span>
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Currency:<span className="top-span">RS</span>
            </Nav.Link>
            <Nav.Link href="#link" className="top-menu">
              Language:<span className="top-span">EN</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopRightMenu;
