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

  const gamesData = [
    {
      id: 1,
      title: 'Game Title 1',
      description: 'A brief description of the game. This could include gameplay mechanics, story, or other details.',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 2,
      title: 'Game Title 2',
      description: 'A brief description of the game. This could include gameplay mechanics, story, or other details.',
      image: 'https://picsum.photos/200/150',
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
            //   maxWidth: '800px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={game.image}
              alt="Placeholder"
              style={{
                width: '200px',
                height: '150px',
                borderRadius: '10px',
                marginRight: '20px',
              }}
            />
            <div>
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
                }}>
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Games;