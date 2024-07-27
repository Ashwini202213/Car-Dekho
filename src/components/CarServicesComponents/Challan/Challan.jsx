import React from "react";
import Challans from '../../../assets/images/carService/Challans.jpg';
import share from '../../../assets/images/carService/share.svg'
import avatar from '../../../assets/images/carService/avatar.svg'
import nearby from '../../../assets/images/carService/nearby.svg'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import LogInModal from "../Modal/LogInModal";


export default function Challan() {
    return (
        <Row>
            <Col lg={8} md={12} sm={12} className="mb-3">
                {
                    <img className="challanImg" src={Challans} />

                }
            </Col>

            <Col lg={4} sm={12} className="challanDiv challanCheck">
                <div className="label mb-1">FREE CHALLAN CHECK</div>
                <h5 className="fw-bold">Challan Check</h5>
                <p className="fontSize">Check your challan online for free and pay your car challan in the minimum
                    possible steps at CarDekho to avoid penalties and other issues.</p>
                {/* <Button className='challanCheckBtn' name='View Challan Details' /> */}
                <LogInModal/>

                <div className="d-flex justify-content-evenly align-items-center">
                    <div>
                        <img src={nearby} alt="nearby" />
                        <p className="fontSize">More services</p>
                    </div>
                    <div>
                        <img src={share} alt="share" />
                        <p className="fontSize">Share</p>
                    </div>

                </div>

                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </Col>
        </Row>
    )
}