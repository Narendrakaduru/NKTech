import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Container, Nav, Button } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <BsNavbar 
      expand="lg" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container>
        <BsNavbar.Brand href="#" className="fw-bold d-flex align-items-center">
          <img 
            src="/images/NKTECH.png" 
            alt="NK Tech" 
            height="60" 
            className="me-2" 
            style={{ width: 'auto' }}
          />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbarNav" />
        <BsNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link href="#services" className="nav-link-custom mx-2">Services</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom mx-2">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom mx-2">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="nav-button text-white btn btn-primary" style={{ backgroundColor: '#2b4b64' }}>Get Started</Button>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;