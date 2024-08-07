import React, { useState, useRef, useEffect } from 'react';
import "./BannerForm.css"
import { carBudget } from '../../../assets/data/exploreNewCarsData/data';

const SelectCarBudget = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setInputValue(selectedValue); // Update input field
    setShowDropdown(false);
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = carBudget.filter((budget) =>
    budget.budget.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="select-container" ref={inputRef}>
      <input
        className="select-inputCarBudget"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder="Select Budget"
      />
      {showDropdown && (
        <select
          className="select-dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          size={filteredOptions.length}
        >
          {filteredOptions.map((budget) => (
            <option key={budget.id} value={budget.budget}>
              {budget.budget}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectCarBudget;
