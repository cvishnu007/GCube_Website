import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../components/navbar';
import logoImage from '../assets/img1.jpeg'; 
import textImage from '../assets/img2.jpeg'; 
import backgroundImage from '../assets/3.jpeg';
import FAQs from '../components/FAQ';
import Carousel from '../components/carousel';

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
      minHeight: '380vh', 
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Ensure the background covers the entire container
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'repeat-y' // Prevent the background from repeating
    }}> {/* Extend the main site page height */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
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
          >
            GCUBE
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
          >
            Get. Game. Going.
          </p>
        </div>
        <div
          ref={textAreaRef}
          style={{
            position: 'absolute',
            top: '110%',
            marginTop: '5px',
            height: '60vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(62, 62, 62, 0.7 )', // Background color
            padding: '7px',
            opacity: fadeInTextArea ? 1 : 0, // Fade-in effect
            transform: fadeInTextArea ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
          }}
        >
          <img
            src={textImage}
            alt="Text Image"
            style={{
              width: 'auto',
              height: '80%',
              borderRadius: '10px',
            }}
          />
          <div style={{ width: '100%', marginLeft: '20px' }}>
            <h2
              style={{
                fontFamily: 'Oswald',
                fontSize: '4.8vw',
                fontWeight: 'bolder',
                marginBottom: '10px',
                color: 'rgb(44, 211, 211)',
              }}
            >
              Game Development Club Of <b>PES</b>
            </h2>
            <p
              style={{
                fontFamily: 'Domine',
                fontSize: '1.5vw',
                fontWeight: 'lighter',
                color: 'whitesmoke',
              }}
            >
              <em1>G³</em1> is open to anyone passionate about game development, regardless of background or
              experience level. Whether your interests lie in animation, game design, art, sfx or voice
              acting, we have a place for everyone. We are committed to providing everyone equal
              opportunities and guidance for all things game development.
            </p>
          </div>
        </div>
<div
  ref={textAreaRef2} // New ref for the second text area
  style={{
    position: 'absolute',
    top: '190%', // Position it below the previous section

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
    }}
  >
    {/* <em1>Who Are We Looking For?</em1> */}
    Who Are We Looking For?
  </h2>
  <Carousel/>
  {/* <div className="row">
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 1" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Leaders</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0 , 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 2" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Innovators</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 3" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Coders</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-md-3">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 4" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Designers</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
          </div> 
        </div> */}
      </div>
      <div
  ref={faqRef} // New ref for the second text area
  style={{
    position: 'absolute',
    top: '290%', // Position it below the previous section
    marginTop: '5px',
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
  }}>
  {/* FAQ Section */}
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
    }}
  >
    <h2
      style={{
        fontFamily: 'Zen Dots',
        fontSize: '4vw',
        fontWeight: 'bolder',
        color: 'rgb(44, 211, 211)',
        // textAlign: 'left', // Center the text
        marginBottom: '50px',

      }}
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