import React from 'react'
import Img from "../../assets/images/newCars/banner/newcar_banner.jpg"
import Img1 from "../../assets/images/newCars/banner/AutoPortal-CarDekho-Adapt.jpg"

import "./CarBanner.css"
// import SelectCarBudget from '../../components/Form/SelectCarBudget';
import SelectCarBudget from "../../components/ExploreNewCars/Form/SelectCarBudget"
// import SelectVehicle from '../../components/ExploreNewCars/Form/SelectVehicle';
import SelectVehicle from "../../components/ExploreNewCars/Form/SelectVehicle"

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