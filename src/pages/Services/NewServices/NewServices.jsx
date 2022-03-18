import { Card } from 'antd';
import "antd/dist/antd.css";
import "./NewServices.css"
import FormServices from './components/FormServices/FormServices';
import { useNavigate } from 'react-router-dom';
import {parse,v4 as uuidv4} from "uuid"
import { useState, useEffect } from 'react';
import Message from '../../../components/Messages/Messages';
import {useParams} from 'react-router-dom';

function NewServices() {

    const history = useNavigate();
    const {id} = useParams();
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const [project,setProject]= useState([]);

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


    function createService(project){
        
        const lastService = project.services[project.services.length -1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if(newCost>parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType("error")
            project.services.pop()
            return false;
        }
        
        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: "PATCH",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data)=>{console.log(data);history(`/services/${project.id}` , {state: "Serviço adicionado ao projeto com sucesso"})})
        .catch(err=> console.log(err))
    }
    // history(`/services/${project.id}` , {state: "Serviço adicionado ao projeto com sucesso"})
    return ( 
        <div className='newservice-container '>
         {message && <Message type={type} msg={message}/>}
        <Card title={<h1>Criar Serviço</h1>} className='card'>

            <p>Adicione os serviços do projeto.</p>
            <FormServices handleSubmit={createService} nameSubmit="Cadastrar serviço" nameClear="Limpar" projectData={project}/>
        
        </Card>
        </div>
     );
}

export default NewServices;