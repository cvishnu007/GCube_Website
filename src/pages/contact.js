import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('http://localhost:4000/api/v1/query/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      // Show confirmation animation
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1d23' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1
              className="display-4"
              style={{
                fontFamily: 'Oswald',
                color: 'rgb(44, 211, 211)',
                fontWeight: 'bolder',
                fontSize: '4rem',
                textShadow: '0 0 10px black',
              }}
            >
              Contact Us
            </h1>
            <p className="lead text-white">
              Have a question or want to collaborate? We'd love to hear from you!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-white">
              If you're interested in learning more about our projects, or if you'd like to
              collaborate with us, please don't hesitate to reach out. We're always looking
              for like-minded individuals to join our community.
            </p>
            <p className="text-white">
              You can contact us through the form below, or by sending an email to{' '}
              <a href="mailto:gcube@pes.edu" className="blue1">
                gcube@pes.edu
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card
              className="contact-form-card"
              style={{ backgroundColor: '#2a2e35', border: 'none' }}
            >
              <Card.Body>
                {showConfirmation ? (
                  <div className="text-center">
                    <h4 style={{ fontWeight: 'bolder'}}>
                      <em1>Message Sent Successfully!</em1>
                    </h4>
                    <p style={{ color: 'white' }}>Thank you for reaching out to us.</p>
                  </div>
                ) : (
                  <>
                    <Card.Title
                      style={{
                        color: 'rgb(189, 38, 111)',
                        fontSize: '1.5rem',
                        fontFamily: 'Oswald',
                        fontWeight: 'Bold',
                      }}
                    >
                      Get in Touch
                    </Card.Title>
                    <form 
                    onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <label className="form-label text-white">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Message:</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <Button
                        variant="outline-secondary"
                        style={{
                          backgroundColor: 'rgb(123, 16, 68)',
                          color: 'whitesmoke',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Oswald',
                          fontSize: '1rem',
                        }}
                        className="icon2"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </form>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
