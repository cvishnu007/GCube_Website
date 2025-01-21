import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/v1/query/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1d23' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="display-4 "
              style={{
                fontFamily: 'Oswald',
                color: 'rgb(44, 211, 211)',
                fontWeight: 'bolder',
                fontSize: '4rem',
                textShadow: '0 0 10px black'
              }}>Contact Us</h1>
            <p className="lead text-white">Have a question or want to collaborate? We'd love to hear from you!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-white">
              If you're interested in learning more about our projects, or if you'd like to collaborate with us, please don't hesitate to reach out. We're always looking for like-minded individuals to join our community.
            </p>
            <p className="text-white">
              You can contact us through the form below, or by sending an email to <a href="mailto:contact@gcube.com" className="blue1">contact@gcube.com</a>.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="contact-form-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
              <Card.Body>
                <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem', fontFamily:'Oswald', fontWeight:'Bold'}}>Get in Touch</Card.Title>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-white">Name:</label>
                    <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} 
                      value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Email:</label>
                    <input type="email" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} 
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Message:</label>
                    <textarea className="form-control" rows="5" style={{ backgroundColor: '#333', color: '#fff' }} 
                      value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
                    className='icon2'
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
