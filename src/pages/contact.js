import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const Contact = () => {
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
              You can contact us through the form below, or by sending an email to <a href="mailto:gcube@pes.edu" className="blue1">gcube@pes.edu</a>.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            {/* Contact Form */}
            <Card className="contact-form-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
              <Card.Body>
                <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem', fontFamily:'Oswald', fontWeight:'Bold'}}>Get in Touch</Card.Title>
                <form>
                  <div className="mb-3">
                    <label className="form-label text-white">Name:</label>
                    <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Email:</label>
                    <input type="email" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Message:</label>
                    <textarea className="form-control" rows="5" style={{ backgroundColor: '#333', color: '#fff' }}></textarea>
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