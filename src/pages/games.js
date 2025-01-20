import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../components/navbar';
import backgroundImage from '../assets/3.jpeg';

const Games = () => {
  // Data for the cards
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
      const timeout = setTimeout(() => {
        setFadeIn(true);
      }, 100);
      return () => clearTimeout(timeout);
    }, [])
    const mediaQueries = {
      mobile: '@media (max-width: 768px)',
    };

  const gamesData = [
    {
      id: 1,
      title: 'COD: Microwarfare',
      description: 'This game was made for the 24 hour DeltaTime 2024 game jam organised by the PARALLAX club in PES University ,EC campus. The theme was "Too Much of a Good Thing".Our interpretation of it was too much of being immune(good thing) to a kind of virus makes you vulnerable(bad thing) to another.',
      image: 'https://picsum.photos/200/150',
      link:'https://minedude918.itch.io/codmicrowarfare',
    },
    {
      id: 2,
      title: 'Mini Heist',
      description: 'This game was made for the GMTK Game Jam 2024 game jam hosted on  itch. The  theme was "Build to Scale". Our interpretation of it was you can scale anything in the game from characters, bank vaults( ; ) ) to even yourself!!',
      image: 'https://picsum.photos/200/150',
      link:'https://dreadnexus.itch.io/miniheist',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
      }}
    >
      {/* Navigation Bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <div style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 0.7s ease-in-out',
      }}>
      <h2
        style={{
        fontFamily: 'Zen Dots',
        fontSize: '4vw',
        color: 'whitesmoke',
        fontStyle: 'italic',
        fontWeight: 'bolder',
        textAlign: 'center', // Center the text
        marginTop: '5vh',
        marginBottom: '5vh',
        }}>
        {/* <em1>Our Games</em1> */}
        Our Games
    </h2>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* Map through gamesData to render cards */}


{gamesData.map((game) => (
  <div
    key={game.id}
    style={{
      backgroundColor: 'rgba(62, 62, 62, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      margin: '10px 0',
      width: '90%',
      [mediaQueries.mobile]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    }}
  >
    <img
      src={game.image}
      alt="Placeholder"
      style={{
        width: '200px',
        height: '150px',
        borderRadius: '10px',
        [mediaQueries.mobile]: {
          marginBottom: '20px', // Add margin bottom for mobile
        },
      }}
    />
    <div
      style={{
        [mediaQueries.mobile]: {
          width: '100%', // Make the text container full width on mobile
        },
      }}
    >
      <h2
        style={{
          fontFamily: 'Oswald',
          fontSize: '2rem',
          fontWeight: 'bolder',
          color: 'rgb(44, 211, 211)',
          marginBottom: '10px',
        }}
      >
        {game.title}
      </h2>
      <p
        style={{
          fontFamily: 'Domine',
          fontSize: '1rem',
          color: 'whitesmoke',
          marginBottom: '20px',
        }}
      >
        {game.description}
      </p>
      <a href={game.link} target='_blank'>
      <button
        className='icon2'
        style={{
          backgroundColor: 'rgb(189, 38, 111)',
          color: 'whitesmoke',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Oswald',
          fontSize: '1rem',
        }}
      >
        Play Now
      </button>
      </a>
    </div>
  </div>
))}
      </div>
      </div>
    </div>
  );
};


export default Games;




// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const gamesData = [
//   {
//     id: 1,
//     title: 'Game 1',
//     description: 'This is a sample game description.',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 2,
//     title: 'Game 2',
//     description: 'This is another sample game description.',
//     image: 'https://via.placeholder.com/300',
//   },
//   // Add more games here...
// ];

// const Games = () => {
//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#1a1d23' }}>
//       <Container fluid className="py-5">
//         <Row className="justify-content-center">
//           <Col md={6} className="text-center">
//             <h1 className="display-4 "
//               style={{
//                 fontFamily: 'Oswald',
//                 color: 'rgb(44, 211, 211)',
//                 fontWeight: 'bolder',
//                 fontSize: '4rem',
//                 textShadow: '0 0 10px black'
//               }}>Games</h1>
//             <p className="lead text-white">Check out our latest games!</p>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           {gamesData.map((game) => (
//             <Col key={game.id} md={4} className="mb-4">
//               <Card className="contact-form-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
//                 <Card.Img variant="top" src={game.image} style={{ height: '200px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Title style={{ color: 'rgb(189, 38, 111)', fontSize: '1.5rem' }}>{game.title}</Card.Title>
//                   <Card.Text style={{ color: 'whitesmoke' }}>{game.description}</Card.Text>
//                   <Button
//                     variant="outline-secondary"
//                     style={{
//                       backgroundColor: 'rgb(123, 16, 68)',
//                       color: 'whitesmoke',
//                       padding: '10px 20px',
//                       borderRadius: '5px',
//                       border: 'none',
//                       cursor: 'pointer',
//                       fontFamily: 'Oswald',
//                       fontSize: '1rem',
//                     }}
//                     className='icon2'
//                   >
//                     Play Now
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Games;