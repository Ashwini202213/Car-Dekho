import React from "react";
import List from "./List";
import { listData } from "../../../data/CarServiceData";
import Col from "react-bootstrap/Col";


export default function AboutProcess() {
    return (
        <Col lg={7} className="challanDiv">

            <h5 className="mb-4 fw-bold">About the process</h5>
            {/* <Row> */}
            {
                listData.map(list => (
                    <List
                        key={list.id}
                        image={list.image}
                        head={list.head}
                        content={list.content} />
                ))
            }
            {/* </Row> */}
            <span className="verticalLine"></span>

        </Col>
        // </Row>

    )
}