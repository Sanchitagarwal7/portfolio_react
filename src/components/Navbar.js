import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarr = () => {
  return (
    <>
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link">LeetCode</Nav.Link>
            <Nav.Link href="/" className="nav-link">GeeksForGeeks</Nav.Link>
            <Nav.Link href="/" className="nav-link">CodeForces</Nav.Link>
            <Nav.Link href="/" className="nav-link">CodeChef</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbarr;
