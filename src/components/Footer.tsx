import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: '#2b4b64' }}>
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} NKTech. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;