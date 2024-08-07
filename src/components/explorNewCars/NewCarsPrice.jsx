import React, { useState } from 'react';
import { Collapse, Button, Table } from 'reactstrap';
import './NewCarsPrice.css';  // Import the CSS file

function NewCarsPrice(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='NewCar-Container' >

        <React.StrictMode  >
            
            <h2 className='firstHeading'>New Cars in 2024</h2>
            <p >
            CarDekho brings a complete range of new cars in 2024 in India with prices. You can search cars by applying filters such as by price, by bodytype, by brand, by seating capacity & more. Also, stay updated with upcoming cars, electric cars in India, compare cars in your price range and stay tuned to the latest car news.
            </p>

            <Collapse isOpen={isOpen} {...args}>
            <h2 className='SecondHeading' >New Cars in India with Prices</h2>
                <Table bordered className="custom-table">  {/* Apply the custom CSS class */}
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Porsche Macan EV</td>
                            <td>Rs. 1.22 - 1.65 Cr*</td>
                        </tr>
                        <tr>
                            <td>Hyundai Exter</td>
                            <td>Rs. 6.13 - 10.43 Lakh*</td>
                        </tr>
                        <tr>
                            <td>Audi Q5</td>
                            <td>Rs. 65.51 - 72.30 Lakh*</td>
                        </tr>
                        <tr>
                            <td>Force Urbania</td>
                            <td>Rs. 30.51 - 36.84 Lakh*</td>
                        </tr>
                        <tr>
                            <td>BYD Atto 3</td>
                            <td>Rs. 24.99 - 33.99 Lakh*</td>
                        </tr>
                    </tbody>
                </Table>
            </Collapse>
            <Button color='none' onClick={toggle} >
                Read More
            </Button>
        </React.StrictMode>
        </div>
    );
}

export default NewCarsPrice;
