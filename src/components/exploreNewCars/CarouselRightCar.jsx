import React from 'react';
import Card from 'react-bootstrap/Card';
import './CustomCarousel.css';
import Button from 'react-bootstrap/Button';
// import Slider from "react-slick";
function CarouselRightCar({ cars }) {

    const firstCars = cars.slice(0,4)
    return (
        <div className='carousel-container'>
            <div className="carousel-content" >
               {/* <Slider {...settings}> */}
                {firstCars.map((car) => (
                    <div key={car.id}>
                    <Card className='card' >
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Text>{car.price}</Card.Text>
                            <Button className='cardBtn-class' variant="none">View All Offers</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            {/* </Slider> */}
            </div>
            <button className='bottom-btn'>View All SUV Cars</button>

        </div>
    );
}


export default CarouselRightCar;








// import React from 'react';
// import { Carousel, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function CarsCarousel({cars}) {
// //   const cards = [
// //     { id: 1, image: 'path/to/image1.jpg', title: 'Card 1', text: 'This is card 1' },
// //     { id: 2, image: 'path/to/image2.jpg', title: 'Card 2', text: 'This is card 2' },
// //     { id: 3, image: 'path/to/image3.jpg', title: 'Card 3', text: 'This is card 3' },
// //   ];

//   return (
//     <Carousel >
//       {cars.map((cars) => (
//         <Carousel.Item key={cars.id}>
//           <Card>
//             <Card.Img variant="top" src={cars.image} />
//             <Card.Body>
//               <Card.Title>{cars.name}</Card.Title>
//               <Card.Text>{cars.price}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default CarsCarousel;
