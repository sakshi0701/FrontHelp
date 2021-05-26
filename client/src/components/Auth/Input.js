import React from 'react';
import { FormInput } from '../PageStyles/Forms';

const Input = ({ type, name, placeholder, label, handleChange }) => {
    return (
        <div>
            <FormInput 
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
