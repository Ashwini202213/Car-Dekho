import React from 'react';
import { Button } from 'reactstrap';

function SearchNewBrand({  setActiveTab }) {
  return (
    <div style={{ marginLeft: "11px" }}>
      <Button color='none'
      style={{color:"#86878A",border:"none", fontSize:"14px" }}
        onClick={() => setActiveTab('default')}
      >
        Current
      </Button>
      <Button 
      color='none'
      style={{color:"#86878A",border:"none", fontSize:"14px" }}
        onClick={() => setActiveTab('upcoming')}
      >
        Upcoming
      </Button>
      <Button 
      color='none'
      style={{color:"#86878A",border:"none", fontSize:"14px"}}
        onClick={() => setActiveTab('new')}
      >
        Expired
      </Button>
    </div>
  );
}

export default SearchNewBrand;
