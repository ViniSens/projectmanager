import "./EditProject.css"
import { Card } from 'antd';
import "antd/dist/antd.css";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/layout/Loading/Loading";
import ProjectForm from "../NewProject/components/ProjectForm";
import { useNavigate } from 'react-router-dom';
import Message from "../../components/Messages/Messages";


function EditProject() {
    
    const {id} = useParams();
    const [project,setProject]= useState([]);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    const history = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data)=>{setProject(data)})
        .catch(err=> console.log(err))
        }, 400)
    }, [])
    
    function editPost(project){
        setMessage('');

        if(project.budget < project.cost){
            setMessage("O orçamento não pode ser menor queo custo do projeto!")
            setType("error")
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(resp=> resp.json())
        .then((data)=> {setProject(data); history('/project', {state: "Projeto alterado com sucesso!"})})
        .catch(err=> console.log(err))
    }
    
    return (  
        <>
            {project.name ? (
                <div className='editproject-container '>
                    {message && <Message type={type} msg={message}/>}
                    <Card title={<h1>Editar Projeto</h1>} className='card'>
                        <p>Faça alterações em seu projeto.</p>
                        <ProjectForm handleSubmit={editPost} projectData={project} nameSubmit="Editar Projeto" nameClear="Limpar"/>
                    </Card>
                </div>
            ):(<Loading/>)}
        </>
    );
}

export default EditProject;