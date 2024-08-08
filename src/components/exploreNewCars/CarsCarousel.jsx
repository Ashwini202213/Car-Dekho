import React from 'react';
import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './CustomCarousel.css';


// import Slider from "react-slick";
function CustomCarousel({ cars }) {
    // const settings = {
    //     dosts:true,
    //     infinite:true,
    //     speed:500,
    //     slidesToShow:3,
    //     slidesToScroll:3
    // }
    return (
        <div className='carousel-container'>
               {/* <Slider {...settings}> */}
            <div className="carousel-content" >
                {cars.map((car) => (
                    <div >
                    <Card key={car.id}  >
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Text>{car.price}</Card.Text>
                            <Button className='btn' variant="none">Get On-Road Price</Button>
                        </Card.Body>
                    </Card>

                    </div>

                ))}
            </div>
            {/* </Slider> */}
            <button className='bottom-btn'>View All Cars Under 5 Lakh</button>

        </div>
    );
}

export default CustomCarousel;




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
