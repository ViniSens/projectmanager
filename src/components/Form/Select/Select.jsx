import React from 'react';
import './Select.css'
function Select({text,name,optons,handleOnChange,value}) {
    return ( 
        <div className='form-control'>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {optons.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
     );
}

export default Select;