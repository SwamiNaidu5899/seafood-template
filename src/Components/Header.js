import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Seafood Logo"
            src="https://img.freepik.com/premium-vector/seafood-restaurant-label-logo-design-template_605910-470.jpg"
            height={70}
            width={100}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About Us</Nav.Link>

            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Fresh Fish</NavDropdown.Item>
              <NavDropdown.Item href="/">Shrimps</NavDropdown.Item>
              <NavDropdown.Item href="/">Crabs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
