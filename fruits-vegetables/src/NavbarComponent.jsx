import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Hellth-Wellth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home-section">Home</Nav.Link>
            <Nav.Link href="#fruits-section">Fruits</Nav.Link>
            <Nav.Link href="#vegetables-section">Vegetables</Nav.Link>
            <Nav.Link href="#home-section">Add To Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;