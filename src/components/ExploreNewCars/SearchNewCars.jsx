import React from 'react';
import { Button } from 'reactstrap';

function SearchNewCars({ setPriceTab }) {
    return (
        <div style={{ marginLeft: "11px",marginLeft:"19px" }}>
            <Button color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('1-5 Lakh')}
            >
                1-5 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('5-10 Lakh')}
            >
                5-10 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('10-15 Lakh')}
            >
                10-15 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('15-20 Lakh')}
            >
                15-20 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('20-35 Lakh')}
            >
                20-35 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('35-50 Lakh')}
            >
                35-50 Lakh
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('50 Lakh - 1 Crore')}
            >
                50 Lakh - 1 Crore
            </Button>
            <Button
                color='none'
                style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                onClick={() => setPriceTab('Above 1 Crore')}
            >
                Above 1 Crore
            </Button>
        </div>
    );
}

export default SearchNewCars;
