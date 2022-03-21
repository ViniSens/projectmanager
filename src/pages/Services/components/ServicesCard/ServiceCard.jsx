import "./ServiceCard.css"
import {BsPencil, BsFillTrashFill} from "react-icons/bs"
import { Card } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function ServiceCard({name, cost, desc, id, handleRemove}) {

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id,cost)
    }

    return ( 
        <div className="service-card">
            <Card size="small" title={<h4>{name}</h4>} style={{width: 300 }} className='card'>
                <p><span>Custo:</span> R${cost}</p>
                <p><span>Decrição:</span> {desc}</p>
                <div className="project-card-actions">
                    <button onClick={remove}><BsFillTrashFill/> Excluir</button>
                </div>
                
            </Card>
        </div>
     );
}

export default ServiceCard;