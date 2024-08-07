import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { ButtonGroup, Button } from 'react-bootstrap';

function SearchNewBrand({ setActiveTab }) {
  return (
    <ButtonGroup style={{ marginLeft: "11px" }}>
      <Button 
        variant="none"
        color='none'
        style={{ color:"#86878A", border:"none", fontSize:"14px" }}
        onClick={() => setActiveTab('default')}
      >
        Current
      </Button>
      <Button 
        variant="none"
        style={{ color:"#86878A", border:"none", fontSize:"14px" }}
        onClick={() => setActiveTab('upcoming')}
      >
        Upcoming
      </Button>
      <Button 
        variant="none"
        style={{ color:"#86878A", border:"none", fontSize:"14px" }}
        onClick={() => setActiveTab('new')}
      >
        Expired
      </Button>
    </ButtonGroup>
  );
}

export default SearchNewBrand;
