import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 ${scrolled ? 'scrolled' : 'bg-transparent'}`}
      variant={scrolled ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">Horizon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#features" className="mx-2">Features</Nav.Link>
            <Nav.Link href="#testimonials" className="mx-2">Testimonials</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="ms-3">Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;