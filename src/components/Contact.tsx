import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container className="text-center">
        <h2 className="mb-4">Contact Us</h2>
        <p>Reach out at <a href="mailto:nani@nktech.online">nani@nktech.online</a></p>
        <Button
          href="mailto:nani@nktech.online"
          className="text-white"
          style={{ backgroundColor: '#2b4b64' }}
        >
          Send Email
        </Button>
      </Container>
    </section>
  );
};

export default Contact;