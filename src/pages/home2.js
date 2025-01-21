import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../components/navbar';
import logoImage from '../assets/img1.jpeg'; 
import textImage from '../assets/img2.jpeg'; 
import backgroundImage from '../assets/3.jpeg';
import FAQs from '../components/FAQ';
import Carousel from '../components/carousel';
import './home2media.css';

const Home2 = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInTextArea, setFadeInTextArea] = useState(false);
  const [fadeInTextArea2, setFadeInTextArea2] = useState(false);
  const [fadeInFAQ, setFadeInFAQ] = useState(false); 
  const textAreaRef = useRef(null);
  const textAreaRef2 = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInTextArea(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (textAreaRef.current) {
      observer.observe(textAreaRef.current);
    }

    return () => {
      if (textAreaRef.current) {
        observer.unobserve(textAreaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInTextArea2(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (textAreaRef2.current) {
      observer.observe(textAreaRef2.current);
    }

    return () => {
      if (textAreaRef2.current) {
        observer.unobserve(textAreaRef2.current);
      }
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInFAQ(true);
        }
      },
      { threshold: 0.8 } // Trigger when 30% of the element is visible
    );
  
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
  
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <div style={{ 
      height: '390vh', 
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Ensure the background covers the entire container
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'repeat-y' // Prevent the background from repeating
    }}> {/* Extend the main site page height */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <div>
      <div style={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "5px"}}>
        <img
          src={logoImage}
          alt="Logo"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 1,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          }}
        />
        <div style={{ position: 'absolute', textAlign: 'center', top: '20%' }}>
          <h1
            style={{
              fontSize: '10vw',
              fontFamily: 'Zen Dots',
              color: 'rgb(189, 38, 111)',
              color: 'whitesmoke',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              opacity: fadeIn ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
            className='home-header1'
          >
            <em>GCUBE</em>
          </h1>
          <p
            style={{
              fontSize: '2vw',
              fontFamily: 'Zen Dots',
              color: '#fff',
              textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
              opacity: fadeIn ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              color: 'rgb(44, 211, 211)',
              marginTop: '0px',
            }}
            className='sub-header1'
          >
            Get. Game. Going.
          </p>
        </div>
        </div>



<div
  ref={textAreaRef}
  style={{
    position: 'relative',
    // top: '110%',
    marginTop: '2rem',
    height: 'auto', // Adjust height as needed
    width: '100%',
    display: 'flex',
    flexDirection: 'row', // Stack elements horizontally
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    padding: '20px', // Add some padding
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add a background color
    borderRadius: '10px', // Add a border radius
    opacity: fadeInTextArea ? 1 : 0, // Fade-in effect
    transform: fadeInTextArea ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
    '@media (max-width: 767px)': {
      top: '160%',
      flexDirection: 'column', // Stack elements vertically on smaller devices
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      top: '180%',
    },
  }}
>
  <img
    src={textImage}
    alt="Text Image"
    style={{
      width: '40%', // Make the image fit the screen
      height: 'auto', // Adjust height as needed
      borderRadius: '10px',
      border: '1px solid #ccc', // Add a border
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add a box shadow to the image
      '@media (max-width: 767px)': {
        width: '100%', // Make the image fit the screen on smaller devices
      },
    }}
  />
  <div style={{ width: '60%', marginLeft: '2rem' }}>
    <h2
      style={{
        fontFamily: 'Oswald',
        fontSize: '4.8vw',
        fontWeight: 'bolder',
        marginBottom: '1rem',
        color: 'rgb(44, 211, 211)',
        '@media (max-width: 767px)': {
          fontSize: '3.5vw',
        },
        '@media (min-width: 768px) and (max-width: 1199px)': {
          fontSize: '4vw',
        },
      }}
    >
      Game Development Club Of <b>PES</b>
    </h2>
    <p
      style={{
        fontFamily: 'Arial',
        // fontSize: '1.5vw',
        fontWeight: 'lighter',
        color: 'whitesmoke',
        '@media (max-width: 767px)': {
          fontSize: '1vw',
        },
        '@media (min-width: 768px) and (max-width: 1199px)': {
          fontSize: '1.2vw',
        },
      }}
      className='txt1'
    >
      <em1>G³</em1> is a community-driven club dedicated to bringing together passionate game developers and artists. We aim to foster creativity, collaboration, and skill development by providing a platform for members to explore all facets of game creation. Through hands-on projects, game jams, and industry engagement, <em1>G³</em1>  empowers its members to grow, connect, and turn their ideas into reality.
    </p>
  </div>
</div>


<div
  ref={textAreaRef2}
  style={{
    position: 'relative',
    // top: '200%', // Position it below the previous section
    marginTop: '7rem ',
    height: 'auto', // Adjust height as needed
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    padding: '7px',
    opacity: fadeInTextArea2 ? 1 : 0, // Fade-in effect for the second div
    transform: fadeInTextArea2 ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
    '@media (max-width: 767px)': {
      top: '160%',
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      top: '170%',
    },
  }}
>
  <h2
    style={{
      fontFamily: 'Zen Dots',
      fontSize: '4vw',
      fontWeight: 'bolder',
      color: 'rgb(44, 211, 211)',
      textAlign: 'center', // Center the text
      marginBottom: '10vh',
      '@media (max-width: 767px)': {
        fontSize: '3vw',
      },
      '@media (min-width: 768px) and (max-width: 1199px)': {
        fontSize: '3.5vw',
      },
    }}
    className='txt2'
  >
    {/* <em1>Who Are We Looking For?</em1> */}
    Who Are We Looking For?
  </h2>
  <Carousel/>
</div>





<div
  ref={faqRef} // New ref for the second text area
  style={{
    position: 'relative',
    // top: '290%', // Position it below the previous section
    marginTop: '5rem ',
    height: 'auto', // Adjust height as needed
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    padding: '7px',
    opacity: fadeInFAQ ? 1 : 0, // Fade-in effect for the FAQ section
    transform: fadeInFAQ ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
    '@media (max-width: 767px)': {
      top: '240%',
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      top: '260%',
    },
  }}
>
<div
  style={{
    position: 'absolute',
    top: '20%', // Position it below the cards
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    padding: '7px',
    '@media (max-width: 767px)': {
      top: '15%',
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      top: '18%',
    },
  }}
>
  <h2
    style={{
      fontFamily: 'Zen Dots',
      fontSize: '4vw',
      fontWeight: 'bolder',
      color: 'rgb(44, 211, 211)',
      // textAlign: 'left', // Center the text
      marginBottom: '1rem',
      '@media (max-width: 767px)': {
        fontSize: '3.5vw',
      },
      '@media (min-width: 768px) and (max-width: 1199px)': {
        fontSize: '3.5vw',
      },
    }}
    className='txt2'
    // className='icon2'
  >
    {/* <em1>FAQs</em1> */}
    FAQs
  </h2>
  <FAQs />
</div>
        </div>
      </div>
    </div>
  );
};

export default Home2;