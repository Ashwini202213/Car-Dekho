
import React from 'react';
import './CarRecommender.css';

const CarRecommender = () => {
  return (
    <div className="car-recommender">
      <div className="recommender-image">
        <img src="https://stimg.cardekho.com/pwa/img/Recommender/man-thinking.png" alt="Confused person" />
      </div>
      <div className="recommender-text">
        <h2>Not Sure, Which car to buy?</h2>
        <p>Let us help you find the dream car</p>
        <button className="recommender-button">Show Me Best Car</button>
      </div>
    </div>
  );
};

export default CarRecommender;
