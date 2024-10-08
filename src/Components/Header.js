import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ toggleCart, toggleWishlist }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/">About Us</Nav.Link>

            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Fresh Fish</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Shrimps</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Crabs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={toggleCart}>Cart</Nav.Link>
            <Nav.Link onClick={toggleWishlist}>Wishlist</Nav.Link>
            <Nav.Link as={Link} to="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
