import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container className="text-center">
        <h2 className="mb-4">About NKTech</h2>
        <p className="lead">
          We're a passionate team helping businesses scale through DevOps, cloud-native platforms, and smart automation. 
          At NKTech, innovation is at the heart of everything we do.
        </p>
      </Container>
    </section>
  );
};

export default About;