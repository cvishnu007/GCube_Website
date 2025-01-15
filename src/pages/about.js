import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const About = () => {
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
              }}>About Us</h1>
            <p className="lead text-white">Welcome to <em1>GCUBE</em1>, the Game Development Club of PES.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-white">
              <em1>GCUBE</em1> is a community of passionate game developers, designers, and artists who come together to create innovative and engaging games. Our mission is to provide a platform for like-minded individuals to collaborate, learn, and grow in the field of game development.
            </p>
            <p className="text-white">
              We believe that game development is not just about creating games, but about telling stories, evoking emotions, and bringing people together. Our team is dedicated to creating games that are not only fun and challenging but also thought-provoking and visually stunning.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            {/* Team Members Section */}
            <h2 className="mb-4" style={{color: 'rgb(44, 211, 211)', fontWeight:'Bolder'}}>Our Team</h2>
            <Row className="g-4">
              {/* Team Member 1 */}
              <Col md={6}>
                <Card style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src="https://picsum.photos/200/300" alt="Team Member 1" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem'}}>John Doe</Card.Title>
                        <Card.Text className="text-white">
                          Game Developer with expertise in Unity and C#. Passionate about creating immersive gameplay experiences.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* Team Member 2 */}
              <Col md={6}>
                <Card style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src="https://picsum.photos/200/301" alt="Team Member 2" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem'}}>Jane Doe</Card.Title>
                        <Card.Text className="text-white">
                          Game Designer specializing in level design and storytelling. Loves crafting engaging narratives.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* Team Member 3 */}
              <Col md={6}>
                <Card style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src="https://picsum.photos/200/302" alt="Team Member 3" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem'}}>Bob Smith</Card.Title>
                        <Card.Text className="text-white">
                          Artist with a focus on 3D modeling and animation. Brings characters and worlds to life.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* Team Member 4 */}
              <Col md={6}>
                <Card style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src ="https://picsum.photos/200/303" alt="Team Member 4" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem'}}>Alice Johnson</Card.Title>
                        <Card.Text className="text-white">
                          Programmer with a passion for AI and machine learning in games. Enjoys solving complex problems.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* Team Member 5 */}
              <Col md={6}>
                <Card style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src="https://picsum.photos/200/304" alt="Team Member 5" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{color: 'rgb(189, 38, 111)', fontSize: '1.5rem'}}>Charlie Brown</Card.Title>
                        <Card.Text className="text-white">
                          Sound Designer focused on creating immersive audio experiences. Loves experimenting with soundscapes.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;