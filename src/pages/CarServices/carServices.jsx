import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CarServiceHistory from "./CarServiceHistory";
import ChallanCheck from "./ChallanCheck";

export default function CarServices() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<ChallanCheck />} />
                    <Route path="/carServiceHistory" element={<CarServiceHistory />} />
                </Routes>
            </BrowserRouter>




        </div>
    )
}