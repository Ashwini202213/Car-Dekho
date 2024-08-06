import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import CarServices from "./pages/carServices/CarServices"
import './App.css';


const App = () => {
  return (
    <div className="App">


      <HomePage />
      <CarServices />
    </div>

  );
};



export default App;



