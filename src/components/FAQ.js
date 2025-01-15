import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces, particularly single-page applications where data can change over time without reloading the page.'
    },
    {
      question: 'How do I install Bootstrap in a React project?',
      answer: 'You can install Bootstrap in a React project by running `npm install bootstrap` and then importing the Bootstrap CSS file in your component or main entry file.'
    },
    {
      question: 'What is an accordion?',
      answer: 'An accordion is a collapsible component that allows you to hide and show content in a compact manner. It is commonly used in FAQs to display questions and answers.'
    }
  ];

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
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
                style={{ ...accordionButtonStyle, ...accordionHeaderStyle }} // Combine button and header styles
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
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