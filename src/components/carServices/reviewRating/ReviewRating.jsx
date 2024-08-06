import React from "react";
import Rating from "./Rating";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ReviewCard from "./ReviewCard";
import MyCollapse from "../common/Collapse";
import { reviewCard } from "../../../assets/data/CarServiceData";

export default function ReviewRating() {
    return (
        
        <Col lg={7} className="challanDiv">
            <h5 className="fw-bold">Review & Rating</h5>
            <Rating rating='5'
                numbers='Based on 35 reviews'
                review='35 rating And Reviews'
                reviewNumbers='35 overall Ratings and Reviews' />

            <Row>
                {
                    reviewCard.map(review => (
                        <ReviewCard
                            id={review.id}
                            name={review.name}
                            detail={review.detail}
                            review={review.review}
                        />
                    ))
                }

            </Row>

            <MyCollapse />

        </Col>
    )
}