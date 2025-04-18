import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      title: 'DevOps Automation',
      description: 'CI/CD, Jenkins, Docker, Kubernetes — we automate it all.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud on AWS, Azure & GCP tailored to your needs.'
    },
    {
      title: 'Security & Monitoring',
      description: 'Grafana, Prometheus, and Zero Trust setups for your peace of mind.'
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container className="text-center">
        <h2 className="mb-5">Our Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;