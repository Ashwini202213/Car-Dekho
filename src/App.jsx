
import React from 'react';
import HomePage from './pages/home-page/HomePage';
import ExploreNewCars  from "./pages/new-cars/ExploreNewCars"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/exploreNewCars' element={<ExploreNewCars/>}/>
        
         {/* <HomePage/> */}
         

         {/* <ExploreNewCars/> */}
         

      </Routes>
          
       </Router>

  );
};



export default App;



