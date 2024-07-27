
import React from 'react';
import BrandCard from './BrandCard';
import './PopularBrands.css';

const brands = [
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg', name: 'Maruti' },
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg', name: 'Tata' },
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg', name: 'Kia' },
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg', name: 'Toyota' },
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg', name: 'Hyundai' },
  { logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg', name: 'Mahindra' },
];

const PopularBrands = () => {
  return (
    <div className="popular-brands">
      <h2>Popular brands</h2>
      <div className="brand-list">
        {brands.map((brand, index) => (
          <BrandCard key={index} logo={brand.logo} name={brand.name} />
        ))}
      </div>
      <a href="#all-brands" className="view-all-brands">View All Brands</a>
    </div>
  );
};

export default PopularBrands;
