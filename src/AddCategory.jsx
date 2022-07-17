import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ handleAddCategory , handleReset }) => {

    const [inputValue, setinputValue] = useState('')


    const handleInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        handleAddCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form className="flex" onSubmit={handleSubmit} aria-label="form">
            <input
                className="search"
                value={inputValue}
                type="search" placeholder="Search..."
                onChange={handleInputChange}
            />
            <button type="sumbit" className="buttonsearch">
                <i className="bi bi-search"></i>                
            </button>
            <button className="buttonreset flex" onClick={handleReset}>
                RESET              
            </button>
            
        </form>
        
    )
}
AddCategory.propTypes={
    AddCategory: PropTypes.func.isRequired,
}