import "./ProjectCard.css"
import {BsPencil, BsFillTrashFill} from "react-icons/bs"
import { Card } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function ProjectCard({id,name,budget,category,handleRemove}) {

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

    return ( 
        <div className="project-card">
            <Card size="small" title={<h4>{name}</h4>} style={{width: 300 }} className='card'>
                <p><span>Orçamento:</span> R${budget}</p>
                <p className="category-text"><span className={`${category.toLowerCase()}`}></span>{category}</p>
                <div className="project-card-actions">
                    <Link to="/"><BsPencil/> Editar</Link>
                    <button onClick={remove}><BsFillTrashFill/> Excluir</button>
                </div>
            </Card>
        </div>
     )
}

export default ProjectCard;