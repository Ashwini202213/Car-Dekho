import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import "./NewCarLogo.css";

function FindOffers({ cars }) {
  const [isOpen, setIsOpen] = useState(false);
  // First 12 cars
  const firstTwelveCars = cars.slice(0, 6);
  // Remaining cars
  const remainingCars = cars.slice(6,18);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='card-container'>
      <div className='card-row'>
        {firstTwelveCars.map(car => (
          <Card key={car.id} className="my-2 card">
            <Card.Body className='card-body'>
              <Card.Img variant="top" src={car.logo} />
              <Card.Text>
                <span>{car.name}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Collapse in={isOpen}>
        <div className='card-row'>
          {remainingCars.map(car => (
            <Card key={car.id} className="my-2 card">
              <Card.Body className='card-body'>
                <Card.Img variant="top" src={car.logo} />
                <Card.Text>
                  <span>{car.name}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Collapse>
      <Button 
        variant="link"
        onClick={toggle}
        className="mt-3 carLogo-btn "
        style={{ textDecoration: "none" }}
      >
        {isOpen ? 'Less Brands' : 'View All Brands'}
      </Button>
    </div>
  );
}

export default FindOffers;
