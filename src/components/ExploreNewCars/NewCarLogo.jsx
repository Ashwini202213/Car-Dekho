import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardText, Button, Collapse } from 'reactstrap';
import "./NewCarLogo.css";

function NewCarLogo({ cars }) {
  const [isOpen, setIsOpen] = useState(false);

  // First 6 cars
  const firstSixCars = cars.slice(0, 12);
  // Remaining cars
  const remainingCars = cars.slice(12);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='card-container'>
      <div className='card-row'>
        {firstSixCars.map(car => (
          <Card 
            key={car.id}
            className="my-2  card"
          
          >
            <CardBody className='card-body'>
              <CardImg src={car.logo} />
              <CardText>
                <span>{car.name}</span>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </div>
      <Collapse isOpen={isOpen}>
        <div className='card-row'>
          {remainingCars.map(car => (
            <Card 
              key={car.id}
              className="my-2 card"
              // style={{
              //   width: '18rem',
              // }}
            >
              <CardBody className='card-body'>
                <CardImg src={car.logo} />
                <CardText>
                  <span>{car.name}</span>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </Collapse>
      <Button color="none" onClick={toggle} style={{ marginTop: '1rem' ,color:"#F75D34",border:"none",backgroundColor:"none"}}>
        {isOpen ? 'Less Brands' : 'View All Brands'}
      </Button>
    </div>
  );
}

export default NewCarLogo;
