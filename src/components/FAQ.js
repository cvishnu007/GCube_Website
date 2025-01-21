import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What opportunities does G³ provide for learning and skill development?',
      answer: 'G³ offers a wide range of opportunities to enhance your game development skills, including interactive workshops, tutorials, and skill challenges. These events focus on essential aspects such as game design, programming, art, and storytelling. Members also benefit from guidance and mentorship provided by peers, industry professionals, and experienced mentors.'
    },
    {
      question: 'How can I collaborate with others through G³?',
      answer: 'G³ is a creative hub where coders, artists, designers, writers, and voice actors come together to collaborate on team projects. Members can participate in game jams, large collaborative projects, or join showcases to work alongside like-minded individuals. These collaborations provide real-world experience and help build strong professional portfolios.'
    },
    {
      question: 'How does G³ help with portfolio enhancement and industry connections?',
      answer: 'By participating in large collaborative projects, game jams, and showcases, members gain real-world experience and create high-quality work for their portfolios. G³ also connects members with industry professionals and mentors through guest lectures, networking events, and one-on-one guidance, helping them establish valuable industry relationships.',
    },
    {
      question: 'How does G³ support personal projects and individual growth?',
      answer: 'G³ offers community support for personal projects by providing constructive feedback, mentorship, and resources tailored to your needs. Members can also seek inspiration and motivation by participating in competitions, game jams, and interactive sessions. The goal is to nurture creativity, innovation, and individual growth while fostering a supportive community.'
    }
  ];

  // State variable to keep track of the currently open accordion item
  const [activeIndex, setActiveIndex] = useState(0);

  // Inline styles for the FAQ title
  const faqTitleStyle = {
    fontFamily: "'Oswald', sans-serif", // Oswald font
    fontSize: '2.5rem', // Larger font size
    fontWeight: '700', // Bold font weight
    textTransform: 'uppercase', // Uppercase text
    color: '#ffffff', // White text color
    marginBottom: '1.5rem', // Spacing below the title
  };

  // Inline styles for the accordion headers
  const accordionHeaderStyle = {
    color: 'aqua',
    fontFamily: "'Oswald', sans-serif", // Oswald font
    fontSize: '1.5rem', // Slightly smaller than the title
    fontWeight: '700', // Bold font weight
    textTransform: 'uppercase', // Uppercase text
    color: '#ffffff', // White text color
  };

  // Inline styles for the accordion button
  const accordionButtonStyle = {
    backgroundColor: '#343a40', // Dark background color
    color: '#ffffff', // White text color
    fontWeight: 'bold', // Bold text
  };

  // Inline styles for the accordion body
  const accordionBodyStyle = {
    backgroundColor: '#343a40', // Dark background color
    color: '#ffffff', // White text color
    fontFamily: "Domine",
    fontWeight: 'bolder'
  };

  return (
    <div className="container mt-5">
      {/* FAQ title with inline styles */}
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item bg-dark text-white font-weight-bold" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === activeIndex ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
                style={{ ...accordionButtonStyle, ...accordionHeaderStyle }} // Combine button and header styles
                onClick={() => setActiveIndex(index)} // Update the active index on click
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === activeIndex ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body" style={accordionBodyStyle}> {/* Apply inline styles to the body */}
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;