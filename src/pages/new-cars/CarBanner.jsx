import React from 'react'
import Img from "../../assets/images/Banner/newcar_banner.jpg"
import Img1 from "../../assets/images/Banner/AutoPortal-CarDekho-Adapt.jpg"

import "./CarBanner.css"
// import SelectCarBudget from '../../components//Form/SelectCarBudget';
// import SelectCarBudget from "../../components/ExploreNewCars/Form/SelectCarBudget"
import SelectCarBudget from "../../components/exploreNewCars/form/SelectCarBudget"
import SelectVehicle from '../../components/exploreNewCars/form/SelectVehicle';

function CarBanner() {

    return (
        <div>
            <div className='car-banner-container1'>
           <img src={Img}  alt="" className='car-banner-image1' />
           <div className='heading'>
            <span>Buying your dream</span>
            <br />
            <span>car? Check Now!</span>
           </div>
            </div>
           <img  src={Img1} alt="" className='CarDekho-Adapt-image' width={"970"} height={"87"} />
           <div className='select'>
           <SelectCarBudget/>
            <SelectVehicle/>

           </div>
        </div>
    )
}

export default CarBanner;