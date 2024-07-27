import React from "react";
import promise from '../../../assets/images/carService/promise.svg';
import CarServiceCard from "../Common/CarServiceCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

export default function Promise() {
    return (
     
            <Col lg={7} className="challanDiv">
            <h5>Cardekho Promise</h5>
                <Row>

                    <CarServiceCard image={promise} name='Privacy' content='Personal information and car records 
                are kept strictly confidential.'/>

                    <CarServiceCard image={promise} name='Support' content='Dedicated team available to assist 
                you with any car-related queries.' />

                    <CarServiceCard image={promise} name='Instant Service' content='Rev up your convenience! 
                Book car services anytime, anywhere, with Instant Service at your fingertips!' />

                    <CarServiceCard image={promise} name='Fair price' content='Enjoy transparent pricing and value-for-money services.' />
                </Row>
            </Col>
  


    )
}