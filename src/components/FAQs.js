import React, { useEffect, useState } from 'react';
import './style.css'; 
import { faqData } from './helpers/faqData'
import navbarlogo from './images/navbarlogo.png'
import Navbar from './Navbar';
import Footer from './Footer';


const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  const handleClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
    {isLoading? (
        <div className="loading-screen">
          <img className="loading-logo" src={navbarlogo} alt="App Logo" />
        </div>
      ) :(
        
        <div className="faqs">
            <Navbar/>
            <div className='titleQuestions'>
            <h1>Frequently Asked Questions</h1>
            </div>
        <div className='mapQuestions'>
        {faqData.map((question, index) => (
          <div key={index} className="faq">
            <button
              className={`question ${activeQuestion === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {question.title}
              <span
              className={`arrow-icon ${
                activeQuestion === index ? 'down hidden' : ''
              }`}
            >
              &#8595;
            </span>
            </button>
            {activeQuestion === index && (
              <div className="answer">{question.answer}</div>
            )}
          </div>
          
        ))}
        </div>
                    <Footer/>
      </div>
      )}
</>
  );
};

export default FAQs;
