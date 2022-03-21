import React from 'react';
import { useLocation } from 'react-router-dom';
import Message from '../../components/Messages/Messages';
import "./Project.css"
import Container from '../../components/layout/Container/Container'
import LinkButton from '../../components/Button/LinkButton'
import ProjectCard from './components/projectCard/ProjectCard';
import { useState, useEffect } from 'react';
import Loading from '../../components/layout/Loading/Loading';

function Project() {

    const [projects,setProjects] = useState([]);
    const[removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');


    const location = useLocation();
    let message = '';
    if(location.state){
       message = location.state;  
    }
    
    useEffect(()=>{
       setTimeout(()=>{
        fetch('http://localhost:5000/projects', {
            method:"GET",
            headers:{'Content-Type':'application/json',}
        })
        .then((res)=> res.json())
        .then((data)=>{setProjects(data); setRemoveLoading(true)})
        .catch(err => console.log(err)) 
       }, 300)
    }, [])

    function removeProject (id){
        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(resp=> resp.json())
        .then(data=> {setProjects(projects.filter((project)=> project.id !==id));setProjectMessage("Projeto excluído com sucesso!")})
        .catch(err=> console.log(err))
    }

    return ( 
        <div className='project-container'>
            <div className='title-container'>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Novo projeto"/>
            </div>
            {message && <Message msg={message} type='success'/>}
            {projectMessage && <Message msg={projectMessage} type='success'/>}
            <Container classVar={`${'project'}`}>
                {projects.length > 0 && projects.map((project)=>(
                    <ProjectCard
                        name={project.name}
                        id={project.id}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length===0 &&(
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
            
        </div>
     );
}

export default Project;