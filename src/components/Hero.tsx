import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero text-white d-flex align-items-center">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-lg-start text-center">
            <h1 className="display-4 fw-bold mb-4 hero-title">
              Empowering Innovation with Tech
            </h1>
            <p className="lead mb-4 hero-subtitle">
              Transforming businesses through cutting-edge DevOps, Cloud Solutions, 
              and Intelligent Automation
            </p>
            <div className="d-flex gap-3 justify-content-lg-start justify-content-center">
              <Button variant="light" size="lg" href="#contact" className="hero-button">
                Let's Talk
              </Button>
              <Button variant="outline-light" size="lg" href="#services" className="hero-button">
                Our Services
              </Button>
            </div>
          </Col>
          <Col lg={5} className="d-none d-lg-block">
            <div className="hero-image-container">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Team collaboration"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;