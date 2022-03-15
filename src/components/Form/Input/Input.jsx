import React from 'react';
import './Input.css'
function Input({type,text,name,placeholder,handleOnChange,value}) {
    return ( 
        <div className='form-control'>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={handleOnChange}
                value={value}
            />
        </div>
     );
}

export default Input;