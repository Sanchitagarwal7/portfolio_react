import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
  return (
    <>
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link">About</Nav.Link>
            <Nav.Link href="/" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="/" className="nav-link">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbarr;
