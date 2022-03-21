import {useParams} from 'react-router-dom';
import "antd/dist/antd.css";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Services.css"
import Message from '../../components/Messages/Messages';
import LinkButton from '../../components/Button/LinkButton';
import Container  from '../../components/layout/Container/Container';
import ServiceCard from './components/ServicesCard/ServiceCard';

function Services() {

    const [project,setProject]= useState([]);
    const[removeLoading, setRemoveLoading] = useState(false);
    const {id} = useParams();
    const [serviceMessage, setServiceMessage] = useState('');
    const [service, setService] = useState([])
    
     const location = useLocation();
     let message = '';
     if(location.state){
        message = location.state;
     }

    
    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data)=>{setProject(data);setService(data.services)})
        .catch(err=> console.log(err))
    }, [])

    console.log(service)

    function removeService(id,cost){
        const servicesUpdate = project.services.filter(
            (s) =>  (s.id   !== id)  
        )
        const projectUpdate = project

        projectUpdate.services = servicesUpdate
        projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdate.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdate)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(projectUpdate)
            setService(servicesUpdate)
            setServiceMessage("Serviço excluído com sucesso")
        })
        .catch(err=> console.log(err))
    }

    return (

        <div className='service-container'>
            <div className='title-container'>
                <h1>Serviços</h1>
                <LinkButton to={`/newservices/${id}`} text="Novo serviço"/>
            </div>
             {message && <Message msg={message} type='success'/>} 
             {serviceMessage && <Message msg={serviceMessage} type='success'/>} 
            <Container classVar={`${'project'}`}>

             
                    {service && service.map((p)=> (
                        <ServiceCard
                            name={p.name}
                            cost={p.cost}
                            desc={p.description}
                            key={p.id}
                            handleRemove={removeService}
                            id={p.id}
                        />  
                    ))}
                    
            </Container>

        </div>

    )

}

export default Services;