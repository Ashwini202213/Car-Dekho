import ReviewCard from "./ReviewCard";
import Star from "../Common/Star";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

export default function Rating({ rating, numbers, reviewNumbers }) {
    return (
        <Container>
            <Col className="d-flex pb-3">
                <span className="fontDetail">
                    <Star />
                </span>

                <p className="fontDetail mx-3">{rating}</p>

                <p className="row fontSize">
                    <span>overall rating</span>
                    <span>{numbers}</span>
                </p>

            </Col>
            <p className="fontSize fw-bold">{reviewNumbers}</p>

        </Container>

    )
}