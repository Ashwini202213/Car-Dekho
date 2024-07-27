import React from 'react'
import { newCarData, usedCarData } from '../../data/carsData';

import CarCarousel from '../../components/HomeComponents/carousel/CarCarousel'
import CarCard from '../../components/HomeComponents/CarList/CarCard'
import PopularBrands from '../../components/HomeComponents/Brands/PopularBrands'
import CarRecommender from '../../components/HomeComponents/CarRecommender/CarRecommender'
import './HomePage.css'
function HomePage() {
  return (
    <div>
          <CarCarousel/>
    
    <header className="App-header">
      
    </header>
    <div className="car-section">
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
    <div className="car-section">
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
    <PopularBrands />
    <CarRecommender/>

    </div>
  )
}

export default HomePage