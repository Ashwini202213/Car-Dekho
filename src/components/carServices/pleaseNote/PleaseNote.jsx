import React from "react";
import CustomNote from './CustomNote'
import Col from "react-bootstrap/Col";
import VenderModal from "../modal/VenderModal";

export default function PleaseNote() {
    return (

        <Col lg={7} sm={12} className="challanDiv">
            <CustomNote heading='Please Note'
                disclaimer='Disclaimer - The info only includes challan(s) data derived from various third party sources and
            may be incomplete or inaccurate.'
                info='After settling the challan, it usually takes a few weeks for it to be accurately displayed and synchronised
            with the information at the RTO.'/>

            <div className="d-flex">

                <VenderModal />

            </div>
        </Col>


    )
}