import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart3, Shield, Zap, Globe } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="feature-card h-100 p-4">
      <Card.Body>
        <div className="feature-icon mb-4">
          {icon}
        </div>
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-muted">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Gain valuable insights from your data with our powerful analytics tools designed to help you make informed decisions.',
      icon: <BarChart3 size={28} />
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your sensitive data with our state-of-the-art security protocols and compliance-ready infrastructure.',
      icon: <Shield size={28} />
    },
    {
      title: 'Lightning Performance',
      description: 'Experience blazing fast performance with our optimized platform built for speed and reliability.',
      icon: <Zap size={28} />
    },
    {
      title: 'Global Reach',
      description: 'Connect with customers worldwide through our distributed network and localized solutions.',
      icon: <Globe size={28} />
    }
  ];

  return (
    <section className="section-padding bg-light" id="features">
      <Container>
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold mb-3">Powerful Features for Your Business</h2>
            <p className="lead text-muted">
              Our platform offers everything you need to modernize your operations and achieve sustainable growth.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;