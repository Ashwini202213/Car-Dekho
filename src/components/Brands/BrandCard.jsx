
import React from 'react';

const BrandCard = ({ logo, name }) => {
  return (
    <div className="brand-card">
      <img src={logo} alt={name} className="brand-logo" />
      <p>{name}</p>
    </div>
  );
};

export default BrandCard;
