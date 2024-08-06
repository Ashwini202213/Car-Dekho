import Col from "react-bootstrap/Col";

const CarServiceCard = ({ name, price, offer, image, className, content, link }) => {
  return (
    <Col >
      <img className={className} src={image} alt={name} />
      <h6>{name}</h6>
      <p className='fw-bold'>{price} <span className="fontSize">{offer}</span> </p>
      <p className="linkBtn">{link}</p>
      <p className='fontColor fontSize'>{content}</p>
    </Col>
  );
};

export default CarServiceCard;