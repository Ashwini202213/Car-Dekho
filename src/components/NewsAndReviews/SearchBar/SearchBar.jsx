import React, { useState } from 'react';
import './SearchBar.css';

const popularCategories = ["Maruti","Hyundai","Tata","Mahindra","Kia","Mercedes-Benz","Renault","Honda","MG","Nissan","Datsun","Toyota"];
const allCategories = ["Abarth","Ashok Leyland","Aston Martin","Audi","Auto Expo News","AutoMobiles","Bajaj","Bentley","BMW","Bugatti","BYD","Cadillac","Car parts News","Caterham","Chevrolet","Citroen","Conquest"];

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 100);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
    setSearchTerm(""); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className='search-btn' onClick={handleSearchClick}>Search</button>
      {isFocused && (
        <div className="suggestions">
          <div className="header">Popular Categories</div>
          {popularCategories.map((category, index) => (
            <div
              key={index}
              className="suggestion-item"
              onMouseDown={() => handleSuggestionClick(category)}
            >
              {category}
            </div>
          ))}
          <div className="header">All Categories</div>
          {allCategories.map((category, index) => (
            <div
              key={index}
              className="suggestion-item"
              onMouseDown={() => handleSuggestionClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
