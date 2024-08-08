import React, { useState } from 'react';
import SearchNewBrand from "../../components/exploreNewCars/SearchNewBrand"
import {carLogos} from "../../assets/data/exploreNewCarsData/data"
import {carsByPrice} from "../../assets/data/exploreNewCarsData/data"
import NewCarLogo from "../../components/exploreNewCars/NewCarLogo"
import NewCarsPrice from '../../components/exploreNewCars/NewCarsPrice';
import SearchNewCars from '../../components/exploreNewCars/SearchNewCars';
import CarsCarousel from '../../components/exploreNewCars/CarsCarousel';
import "./CarData.css"


function CarData() {
  const [activeTab, setActiveTab] = useState('default');
  const [priceTab,setPriceTab] = useState("1-5 Lakh")

  return (
    <div>
      <NewCarsPrice/>
      <div className='newBrand-wrapper'>
        <h2 >Search new cars by brand</h2>
        <SearchNewBrand activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div>
          {activeTab === 'default' && <NewCarLogo cars={carLogos.slice(0,24)}/>}
          {activeTab === 'upcoming' && <NewCarLogo cars={carLogos.slice(25,32)} />}
          {activeTab === 'new' && <NewCarLogo cars={carLogos.slice(33,52)} />}
        </div>
      </div>
      <div className='custom-carousel'>
      <h2>Search new cars by price</h2>
        <SearchNewCars  priceTab={priceTab} setPriceTab={setPriceTab}/>
        <div >
        {priceTab === '1-5 Lakh' && <CarsCarousel cars={carsByPrice}/>}
          {priceTab === '5-10 Lakh' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === '10-15 Lakh' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === '15-20 Lakh' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === '20-35 Lakh' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === '35-50 Lakh' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === '50 Lakh - 1 Crore' && <CarsCarousel cars={carsByPrice} />}
          {priceTab === 'Above 1 Crore' && <CarsCarousel cars={carsByPrice} />}
          {/* {<CarsCarousel/> } */}
        </div>
        
      </div>
    </div>
  );
}

export default CarData;
