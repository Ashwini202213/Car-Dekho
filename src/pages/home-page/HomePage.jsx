import React from 'react'
import "../new-cars/CarData.css"
// import { newCarData, usedCarData } from '../../data/carsData';
import {newCarData, usedCarData} from "../../assets/data/carsData"

import CarCarousel from '../../components/homeComponents/carousel/CarCarousel'
import CarCard from '../../components/homeComponents/carlist/CarCard'
import PopularBrands from '../../components/homeComponents/brands/PopularBrands'
import CarRecommender from '../../components/homeComponents/carRecommender/CarRecommender'
import './HomePage.css'
function HomePage() {
  return (
    <div className='parent-div'>
      <div className='carData-carousel'>
          <CarCarousel/>

      </div>
    
    <header className="App-header">
      
    </header>
    <div className="carData-carousel">
    <h3>The Most Searched Cars </h3>
      <div className="car-list">
        {newCarData.map(car => (
          <CarCard
            key={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
            offers={car.offers}
          />
        ))}
      </div>
    </div>
    <div className="carData-carousel">
      <h2>Recommended Used Cars For You</h2>
      <div className="car-list">
        {usedCarData.map(car => (
          <CarCard
            key={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
            details={car.details}
            button={car.button}
          />
        ))}
      </div>
    </div>
    <div className='carData-carousel'>

    <PopularBrands />
    </div>
    <div className='carData-carousel'>
    <CarRecommender/>

    </div>

    </div>
  )
}

export default HomePage