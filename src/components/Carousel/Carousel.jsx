import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = ({ reviews }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((currentCardIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentCardIndex, reviews.length]);

  return (
    <div className="carousel">
      {reviews.map((card, index) => (
        <div
          key={index}
          className={`carousel-card ${
            index === currentCardIndex ? "active" : ""
          } ${Math.abs(index - currentCardIndex) === 1 ? "prev-next" : ""}`}
        >
          <div className="carousel-card__text">
            <p>{card.description}</p>
          </div>
          <div className="carousel-card__author">
            <img src={card.image} alt="image" />

            <div className="carousel-card__author_info">
              <h2>{card.title}</h2>
              <p>{card.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
