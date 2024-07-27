import Col from "react-bootstrap/Col";
// import { BrowserRouter } from "react-router-dom";

const CarServiceCard = ({ name, price, offer, image, className, content, component }) => {
  return (
    <Col >
      <img className={className} src={image} alt={name} />
      <h6>{name}</h6>
      <p className='fw-bold'>{price} <span className="fontSize">{offer}</span> </p>
      <p>{component}</p>
      {/* <BrowserRouter>
        <p className="linkBtn">{link}</p>
      </BrowserRouter> */}
      <p className='fontColor fontSize'>{content}</p>
    </Col>
  );
};

export default CarServiceCard;