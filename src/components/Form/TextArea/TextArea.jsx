import { Input } from 'antd';
import "./TextArea.css"
function TextArea({text,name,placeholder,handleOnChange,value}) {

    const { TextArea } = Input;
    
    return ( 
        <div className='form-control'>
            <label htmlFor={name}>{text}:</label>
            <TextArea 
                rows={6}
                name={name}
                placeholder={placeholder} 
                id={name}
                onChange={handleOnChange}
                value={value}
                className="text-area"
            />

        </div>
     );
}

export default TextArea;