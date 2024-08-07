
import React from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './searchForm.css'
const CarSearchForm = () => {
  return (
    <div className="search-form">
      <h2>Find your right Car</h2>
      <ToggleButtonGroup  type="radio" name="carType" defaultValue="New Car">
        <ToggleButton  id="tbg-radio-1" value="New Car">
          New Car
        </ToggleButton>
        <ToggleButton   id="tbg-radio-2" value="Used Car">
          Used Car
        </ToggleButton>
      </ToggleButtonGroup>
      <Form>
        <Form.Group controlId="searchBy">
          <Form.Check type="radio" label="By Budget" name="searchBy" defaultChecked />
          <Form.Check type="radio" label="By Brand" name="searchBy" />
        </Form.Group>
        <Form.Group controlId="budget">
          <Form.Label>Select Budget</Form.Label>
          <Form.Control as="select">
            <option>Under ₹ 5 Lakh</option>
            <option>₹ 5 - 10 Lakh</option>
            <option>₹ 10 - 20 Lakh</option>
            <option>Above ₹ 20 Lakh</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="vehicleType">
          <Form.Label>All Vehicle Types</Form.Label>
          <Form.Control as="select">
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>MUV</option>
            <option>Luxury</option>
          </Form.Control>
        </Form.Group>
        <Button className='sub-btn' type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default CarSearchForm;

























// import React from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';

// const SearchForm = () => {
//   return (
//     <div className="search-form p-3">
//       <h4>Find your right car</h4>
//       <div className="btn-group mb-3">
//         <Button variant="outline-primary" className="active">New Car</Button>
//         <Button variant="outline-secondary">Used Car</Button>
//       </div>
//       <Form>
//         <Form.Group as={Row} controlId="formHorizontalBudget">
//           <Form.Label column sm={3}>By Budget</Form.Label>
//           <Col sm={9}>
//             <Form.Control as="select">
//               <option>Select Budget</option>
//               <option>Below 5 Lakh</option>
//               <option>5-10 Lakh</option>
//               <option>10-20 Lakh</option>
//               <option>Above 20 Lakh</option>
//             </Form.Control>
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} controlId="formHorizontalVehicleType" className="mt-3">
//           <Form.Label column sm={3}>All Vehicle Types</Form.Label>
//           <Col sm={9}>
//             <Form.Control as="select">
//               <option>Select Vehicle Type</option>
//               <option>Sedan</option>
//               <option>SUV</option>
//               <option>Hatchback</option>
//               <option>Convertible</option>
//             </Form.Control>
//           </Col>
//         </Form.Group>

//         <Button type="submit" className="mt-3" variant="primary">Search</Button>
//       </Form>
//       <a href="#" className="d-block mt-3">Advanced Search</a>
//     </div>
//   );
// };

// export default SearchForm;
