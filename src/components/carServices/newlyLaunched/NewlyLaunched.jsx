import React from "react";
import CarServiceCard from "../common/CarServiceCard";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { newlyLauchedCars } from '../../../assets/data/CarServiceData';

export default function NewlyLaunched() {
    return (
        <Container className="challanDiv">
            <Row>
                <h5>Newly Launched! Car Services </h5>

                {newlyLauchedCars.map(car => (
                    <CarServiceCard
                        key={car.id}
                        className={car.className}
                        image={car.image}
                        name={car.name}
                        price={car.price}
                        offer={car.offer}
                        component={car.component}
                        // link={car.link}       
                    />
                ))}
            </Row>
        </Container>
    )
}
