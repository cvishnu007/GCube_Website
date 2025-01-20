import React, { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home2 = () => {
  const cards = [
    {
      title: 'Leaders',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
    {
      title: 'Innovators',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
    {
      title: 'Coders',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
    {
      title: 'Designers',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
    {
      title: 'Thinkers',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
    {
      title: 'Worker',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: 'https://picsum.photos/200/150',
      buttonText: 'Join Now',
    },
  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cardsPerSlide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1); // Small screens: 1 card
      } else {
        setCardsPerSlide(3); // Larger screens: up to 3 cards
      }
    };

    updateCardsPerSlide(); // Set initial value
    window.addEventListener('resize', updateCardsPerSlide); // Update on resize
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Chunk cards into groups based on cardsPerSlide
  const chunkCards = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const cardGroups = chunkCards(cards, cardsPerSlide);

  return (
    <div className="container">
      <style>
        {`
          .carousel-media {
            height: 300px;
            object-fit: cover;
          }

          @media (max-width: 576px) {
            .carousel-media {
              height: 200px;
            }
          }

          @media (max-width: 768px) {
            .carousel-media {
              height: 250px;
            }
          }

          @media (max-width: 992px) {
            .carousel-media {
              height: 280px;
            }
          }

          @media (max-width: 1200px) {
            .carousel-media {
              height: 300px;
            }
          }
        `}
      </style>
      <Carousel controls={true} indicators={false} interval={3000}>
        {cardGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {group.map((card, idx) => (
                <div className={`col-${12 / cardsPerSlide} px-2`} key={idx}>
                  <Card
                    className="mx-0"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      marginBottom: '15px',
                      color: 'whitesmoke',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.image}
                      className="img-fluid carousel-media"
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: 'center', fontFamily: 'Oswald', fontSize: '2rem' }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                      <div className="d-flex justify-content-center">
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
                          {card.buttonText}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home2;


//Comment code 2

// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home2 = () => {
//   const cards = [
//     {
//       title: 'Leaders',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Innovators',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Coders',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Designers',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Thinkers',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   const visibleCards = [
//     cards[currentIndex],
//     cards[(currentIndex + 1) % cards.length],
//     cards[(currentIndex + 2) % cards.length],
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <button className="btn btn-outline-secondary" onClick={handlePrev}>
//           Prev
//         </button>
//         <div className="row w-100">
//           {visibleCards.map((card, index) => (
//             <div className="col-md-4" key={index}>
//               <Card
//                 className="mx-auto"
//                 style={{
//                   width: '18rem',
//                   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                   color: 'whitesmoke',
//                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
//                   marginBottom: '15px',
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={card.image}
//                   style={{
//                     height: '300px',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <Card.Body>
//                   <Card.Title
//                     style={{ textAlign: 'center', fontFamily: 'Oswald', fontSize: '2rem' }}
//                   >
//                     {card.title}
//                   </Card.Title>
//                   <Card.Text>{card.content}</Card.Text>
//                   <div className="d-flex justify-content-center">
//                     <Button
//                       variant="outline-secondary"
//                       className="btn-lg"
//                     >
//                       {card.buttonText}
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//         <button className="btn btn-outline-secondary" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home2;


//Comment Code 3


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