import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { AiOutlineAlignLeft } from "react-icons/ai";

function MainNavbar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={
                  <>
                    <AiOutlineAlignLeft />
                    Sort By Category
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <span className="vr" style={{ margin: "5px" }}></span>
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Buy Theme</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Call Us: <a href="#">089252 97807</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MainNavbar;
