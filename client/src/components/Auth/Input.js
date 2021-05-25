import React from 'react';

const Input = ({ type, name, placeholder, label, handleChange }) => {
    return (
        <div>
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            label={label} 
            onChange={handleChange} 
            required/>
        </div>
    )
}

export default Input;
