import React from 'react';
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

  const chunkCards = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const cardGroups = chunkCards(cards, 3); // Group cards into chunks of 3

  return (
    <div className="container">
      <Carousel controls={true} indicators={false} interval={1000}>
        {cardGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {group.map((card, idx) => (
                <div className="col-md-4 px-2" key={idx}>
                  <Card
                    className="mx-0"
                    style={{
                      width: '25rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      marginBottom: '15px',
                      color: 'whitesmoke',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.image}
                      style={{
                        height: '300px',
                        objectFit: 'cover',
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: 'center', fontFamily: 'Oswald', fontSize: '2rem',}}
                        className='custom-title'
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                      <div className="d-flex justify-content-center ">
                        <Button
                          variant="outline-secondary"
                          className="btn-lg icon2"
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
