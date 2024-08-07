import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';  
import React from 'react';

const CarCard = ({ name, price, image, offers, details, button }) => {
  return (
    <div className="car-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      {details && <p>{details}</p>}
      <button>{button ? button : offers}</button>




      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    </div>
  );
};

export default CarCard;
