import React from 'react';
import ProjectForm from './components/ProjectForm';
import "./NewProject.css"
import { Card } from 'antd';
import "antd/dist/antd.css";
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const history = useNavigate();

    function createPost(project){
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(project),
        })
        .then((respo) => respo.json())
        .then((data) =>{history('/project', {state: "Projeto criado com sucesso!"})})
        .catch((err)=> console.log(err))
    }

    return ( 
        <div className='newproject-container '>
        <Card title={<h1>Criar Projeto</h1>} className='card'>

            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} nameSubmit="Cadastrar Projeto" nameClear="Limpar"/>
        
        </Card>
        </div>
     );
}

export default NewProject;