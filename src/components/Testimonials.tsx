import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="testimonial-card">
      <p className="mb-4 fst-italic">{quote}</p>
      <div className="d-flex align-items-center">
        <div>
          <h5 className="mb-1">{author}</h5>
          <p className="text-muted mb-0">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Implementing Horizon has completely transformed how we operate. Our team productivity has increased by 35% and customer satisfaction scores have never been higher.",
      author: "Sarah Johnson",
      role: "COO",
      company: "TechVision Inc."
    },
    {
      quote: "The analytics features have given us insights we never had before. We've been able to identify opportunities and optimize our processes in ways that were previously impossible.",
      author: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions"
    },
    {
      quote: "After evaluating multiple platforms, we chose Horizon for its robust security features and scalability. It was the best decision we could have made for our growing business.",
      author: "Jessica Williams",
      role: "CTO",
      company: "Innovative Systems"
    }
  ];

  return (
    <section className="section-padding" id="testimonials">
      <Container>
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold mb-3">What Our Customers Say</h2>
            <p className="lead text-muted">
              Don't just take our word for it. See what industry leaders have experienced with our platform.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <Carousel 
              indicators={false} 
              interval={5000}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Testimonial 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;