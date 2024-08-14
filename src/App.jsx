
import React from 'react';
import HomePage from './pages/home-page/HomePage';
import ExploreNewCars  from "./pages/new-cars/ExploreNewCars"

const App = () => {
  return (
    <div className="App">
          
        
<<<<<<< HEAD
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
        <h1>Welcome</h1>
        <h2>Recommended Used Cars For You</h2>
        <h3>test code</h3>
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
      {/* <PopularBrands /> */}
      {/* <CarRecommender/> */}
    </div>
=======
         <HomePage/>
         

         <ExploreNewCars/>
         
       </div>
>>>>>>> 98f0230afc06225015657e295c7cd1063db5717d

  );
};



export default App;



