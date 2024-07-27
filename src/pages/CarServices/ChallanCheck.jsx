import React from "react";
import './carServices.css';
import Challan from "../../components/CarServicesComponents/Challan/Challan";
import Promise from "../../components/CarServicesComponents/Promise/Promise";
import PageInformation from "../../components/CarServicesComponents/PageInformation/PageInformation";
import PleaseNote from "../../components/CarServicesComponents/PleaseNote/PleaseNote";
import AboutProcess from "../../components/CarServicesComponents/AboutProcess/AboutProcess";
import ReviewRating from "../../components/CarServicesComponents/ReviewRating/ReviewRating";
import NewlyLaunched from "../../components/CarServicesComponents/NewlyLaunched/NewlyLaunched";
import Accordion from "../../components/CarServicesComponents/Accordion/Accordion";
import Container from 'react-bootstrap/Container';

export default function ChallanCheck() {
    return (
        <Container className="mainDiv">
            <Challan />
            <Promise />
            <PageInformation />
            <PleaseNote />
            <AboutProcess />
            <ReviewRating />
            <NewlyLaunched />
            <Accordion />
        </Container>

    )
}