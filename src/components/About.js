import { useEffect, useState } from "react";
import navbarlogo from "../components/images/navbarlogo.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { cardData } from "./helpers/cardData";
import "./style.css"; 

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState([])

  const toggleCard = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((item) => item !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="about">
      {isLoading ? (
        <div className="loading-screen">
          <img className="loading-logo" src={navbarlogo} alt="App Logo" />
        </div>
      ) : (
        <>
          <Navbar />
            <div className="aboutDiv">
                <div className="titleQuestions">
                    <h1>Beyond the Swipe: Find Deeper Connections with Compass</h1>
                </div>
                <div className="solution">
                    <h3>Our features focus on building meaningful connections, not just superficial swipes.We cultivate a community where users are actively looking to connect and build something real.</h3>
                </div>
                <div className="problem">
                    <h3 className="compassSection">How Compass works?</h3>
                </div>
                <div className="solution">
                <div className="cardSection">
              {cardData.map((card, index) => (
                <div
                  className={`cardDiv ${flippedCards.includes(index) ? 'flipped' : ''}`}
                  key={index}
                  onClick={() => toggleCard(index)}
                >
                  <div className="cardFront">
                    <img className="cardImage" src={card.image} alt={card.title} />
                    <h3 className="cardTitle">{card.title}</h3>
                  </div>
                  <div className="cardBack">
                    <p className="cardDescription">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
                </div>
            </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;

