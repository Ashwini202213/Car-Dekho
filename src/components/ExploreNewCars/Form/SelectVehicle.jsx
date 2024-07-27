import React, { useState, useRef, useEffect } from 'react';
import "./BannerForm.css"
import { carTypes } from '../../../data/ExploreNewCarsData/data';

const SelectVehicle = () => {
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
        setInputValue(selectedValue);
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

    const filteredOptions = carTypes.filter((brand) =>
        brand.value.toLowerCase().includes(inputValue.toLowerCase())
    );
    const handleButtonClick = () => {
        console.log('Button clicked');
      };

    return (
        <div className='select-vehicle-container' ref={inputRef}>
            <div className='input-wrapper'>
            <input
            className='select-input'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleInputClick}
                placeholder="All Vehicle Types"
                
                // <ArrowDropUpOutlinedIcon />
            />

            <button className='select-button' onClick={handleButtonClick}>Search</button>
            </div>
            {showDropdown && (
                <select
                    className='select-dropdown'
                    value={selectedOption}
                    onChange={handleSelectChange}
                    size={filteredOptions.length}>
                    {filteredOptions.map((brand) => (
                        <option key={brand.id} value={brand.value}>
                            {brand.value}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default SelectVehicle;
