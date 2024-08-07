import React, { useState } from 'react';
// import SearchNewBrand from '../../components/SearchNewBrand';
import SearchNewBrand from "../../components/exploreNewCars/SearchNewBrand"
import { carLogos } from '../../assets/data/exploreNewCarsData/data';
// import { carTypes } from '../../data/ExploreNewCarsData/data';
import { carsByPrice } from '../../assets/data/exploreNewCarsData/data';
import NewCarLogo from '../../components/exploreNewCars/NewCarLogo';
import NewCarsPrice from '../../components/exploreNewCars/NewCarsPrice';
import SearchNewCars from '../../components/exploreNewCars/SearchNewCars';
import CarsCarousel from '../../components/exploreNewCars/CarsCarousel';
import "./CarData.css"
import FindOffers from '../../components/exploreNewCars/FindOffers';
import CarouselRightCar from '../../components/exploreNewCars/CarouselRightCar';
import TabRightCar from '../../components/exploreNewCars/TabRightCar';
import CarousLatestCar from '../../components/exploreNewCars/CarousLatestCar';
import CarousNewlyLaunch from '../../components/exploreNewCars/CarousNewlyLaunch';
// import "./CustomCarousel.css"


function CarData() {
  const [activeTab, setActiveTab] = useState('default');
  const [priceTab,setPriceTab] = useState("1-5 Lakh");
  const [findRight,setFindRight] = useState("SUV")


  return (
    <div>
      <NewCarsPrice />
      <div className='newBrand-wrapper'>
        <h2 >Search new cars by brand</h2>
        <SearchNewBrand activeTab={activeTab} setActiveTab={setActiveTab} />
        <div>
          {activeTab === 'default' && <NewCarLogo cars={carLogos.slice(0,24)}/>}
          {activeTab === 'upcoming' && <NewCarLogo cars={carLogos.slice(25,32)} />}
          {activeTab === 'new' && <NewCarLogo cars={carLogos.slice(33,52)} />}
        </div>
      </div>
      <div className='carData-carousel'>
      <h2>Search new cars by price</h2>
        <SearchNewCars  priceTab={priceTab} setPriceTab={setPriceTab}/>
        <div >
        {priceTab === '1-5 Lakh' && <CarsCarousel cars={carsByPrice.slice(0,4)}/>}
          {priceTab === '5-10 Lakh' && <CarsCarousel cars={carsByPrice.slice(4,8)} />}
          {priceTab === '10-15 Lakh' && <CarsCarousel cars={carsByPrice.slice(8,12)} />}
          {priceTab === '15-20 Lakh' && <CarsCarousel cars={carsByPrice.slice(12,16)} />}
          {priceTab === '20-35 Lakh' && <CarsCarousel cars={carsByPrice.slice(16,20)} />}
          {priceTab === '35-50 Lakh' && <CarsCarousel cars={carsByPrice.slice(20,24)} />}
          {priceTab === '50 Lakh - 1 Crore' && <CarsCarousel cars={carsByPrice.slice(24,28)} />}
          {priceTab === 'Above 1 Crore' && <CarsCarousel cars={carsByPrice.slice(28,32)} />}
        </div>
      </div>
      <div className='carData-carousel'>
        <h2>Find Offer On Top Brands</h2>
        <FindOffers cars={carLogos}/>
      </div>

      <div className='carData-carousel'>
        <h2>Find right cars by body type</h2>
        <TabRightCar findRight={findRight} setFindRight={setFindRight}/>
        <div>
        {findRight === "SUV" && <CarouselRightCar cars={carsByPrice.slice(0,4)}/>}
        {findRight === "Hatchback" && <CarouselRightCar cars={carsByPrice.slice(4,8)}/>}
        {findRight === "Sedan" && <CarouselRightCar cars={carsByPrice.slice(8,12)}/>}
        {findRight === "MUV" && <CarouselRightCar cars={carsByPrice.slice(12,16)}/>}
        {findRight === "Luxury" && <CarouselRightCar cars={carsByPrice.slice(16,20)}/>}
        </div>
      </div>
      <div className='custom-carousel'>
        <h2>Newly Lauched! Car Services</h2>
        <CarousNewlyLaunch cars={carsByPrice.slice(36,40)}/>
      </div>
      <div className='carData-carousel'>
        <h2>Latest Cars</h2>
        <CarousLatestCar cars={carsByPrice.slice(32,36)}/> 

      </div>
    </div>
  );
}

export default CarData;
