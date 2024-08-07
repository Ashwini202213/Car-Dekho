import React from 'react';
import { Nav } from 'react-bootstrap';

function TabRightCar({ setFindRight }) {
    return (
        <Nav variant="tabs" style={{marginBottom:"25px"}}>
            <Nav.Item style={{marginLeft:"17px"}}>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setFindRight('SUV')}
                >
                    SUV
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setFindRight('Hatchback')}
                >
                    Hatchback
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setFindRight('Sedan')}
                >
                    Sedan
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setFindRight('MUV')}
                >
                    MUV
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    style={{ color: "#86878A", border: "none", fontSize: "14px" }}
                    onClick={() => setFindRight('Luxury')}
                >
                    Luxury
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default TabRightCar;
