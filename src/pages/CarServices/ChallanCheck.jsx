import React from "react";
import Challan from "../../components/carServices/challan/Challan";
import Promise from "../../components/carServices/promise/Promise";
import PageInformation from "../../components/carServices/pageInformation/PageInformation";
import PleaseNote from "../../components/carServices/pleaseNote/PleaseNote";
import AboutProcess from "../../components/carServices/aboutProcess/AboutProcess";
import ReviewRating from "../../components/carServices/reviewRating/ReviewRating";
import NewlyLaunched from "../../components/carServices/newlyLaunched/NewlyLaunched";
import Accordion from "../../components/carServices/accordion/Accordion";
import Container from 'react-bootstrap/Container';
import './CarServices.css';


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