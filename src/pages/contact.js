import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../components/navbar';
import backgroundImage from '../assets/3.jpeg';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [])

  const contactData = [
    {
      id: 1,
      image: 'https://picsum.photos/200/150',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      role: 'CEO',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/150',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      role: 'Marketing Manager',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/150',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phone: '555-123-4567',
      role: 'Sales Representative',
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
          {/* <em1>Our Team</em1> */}
          Our Team
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
          {/* Map through contactData to render cards */}
          {contactData.map((contact) => (
            <div
              key={contact.id}
              style={{
                backgroundColor: 'rgba(62, 62, 62, 0.7)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                margin: '10px 0',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={contact.image}
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
                  {contact.name}
                </h2>
                <p
                  style={{
                    fontFamily: 'Domine',
                    fontSize: '1rem',
                    color: 'whitesmoke',
                    marginBottom: '10px',
                  }}
                >
                  {contact.role}
                </p>
                <p
                  style={{
                    fontFamily: 'Domine',
                    fontSize: '1rem',
                    color: 'whitesmoke',
                    marginBottom: '10px',
                  }}
                >
                  Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
                <p
                  style={{
                    fontFamily: 'Domine',
                    fontSize: '1rem',
                    color: 'whitesmoke',
                    marginBottom: '20px',
                  }}
                >
                  Phone: {contact.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;