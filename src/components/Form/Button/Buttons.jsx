import { Button } from 'antd';
import "antd/dist/antd.css";
import "./Buttons.css"

function Buttons({nameSubmit, nameReset}) {
    return ( 
        <div>
            <div className='div-reset'>
                <Button type="danger" htmlType="reset" className='btn-reset'>{nameReset}</Button>
            </div>
            <div className='div-submit'>
                <Button type="primary" htmlType='submit' className='btn-submit'>{nameSubmit}</Button>
            </div>
        </div>
     );
}

export default Buttons;