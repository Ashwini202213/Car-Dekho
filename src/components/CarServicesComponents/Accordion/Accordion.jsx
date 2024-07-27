import React from "react";
import AccordionData from "./AccordionData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FAQ from '../../../assets/images/carService/FAQ.svg'

export default function Accordion() {
    return (
        <Container>
            <h5 className="fw-bold pb-4">Frequently asked questions</h5>
            <Row>

                <div className="col-7">
                    <AccordionData />
                </div>

                <div className="col-5">
                    <img style={{ height: '350px', width: '350px' }} src={FAQ} alt="FAQ" />
                </div>
            </Row>

        </Container>
    )
}