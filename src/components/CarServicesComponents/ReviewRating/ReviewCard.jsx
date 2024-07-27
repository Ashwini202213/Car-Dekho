import React from "react";
import Star from "../Common/Star";
import Row from "react-bootstrap/esm/Row";

function ReviewCard({ name, detail, review }) {
    return (

        <Row className="reviews">
            <span>
                <span className="fw-bold font-size">{name}</span>
                <span className="fontSize">{detail}</span>
            </span>

            <span className="d-flex fontSize">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </span>

            <p className="fontColor fontSize">{review}</p>
        </Row>


    )
}

export default ReviewCard;