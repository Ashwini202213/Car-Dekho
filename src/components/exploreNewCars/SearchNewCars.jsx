import React from 'react';
import { Nav } from 'react-bootstrap';

function SearchNewCars({ setPriceTab }) {
    return (
        <Nav variant="tabs" style={{marginBottom:"25px"}}>
            <Nav.Item style={{marginLeft:"17px"}}>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('1-5 Lakh')}
                >
                    1 - 5 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('5-10 Lakh')}
                >
                    5 - 10 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('10-15 Lakh')}
                >
                    10 - 15 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('15-20 Lakh')}
                >
                    15 - 20 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('20-35 Lakh')}
                >
                    20 - 35 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('35-50 Lakh')}
                >
                    35 - 50 Lakh
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('50 Lakh - 1 Crore')}
                >
                    50 Lakh - 1 Crore
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setPriceTab('Above 1 Crore')}
                >
                    Above 1 Crore
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default SearchNewCars;
