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
    const [message, setMessage] = useState();
    const {id} = useParams();

    // const location = useLocation();
    // let message = '';
    // if(location.state){
    //    message = location.state;  
    // }

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

    return ( 
        <div className='service-container'>
            <div className='title-container'>
                <h1>Serviços</h1>
                <LinkButton to={`/newservices/${id}`} text="Novo serviço"/>
            </div>
            {/* {message && <Message msg={message} type='success'/>} */}
            <Container classVar={`${'project'}`}>

                {console.log(project)}
             {/* {project.services.length >= 0 && project.map((project)=>(
                    <ServiceCard
                        name={project.services.name}
                        cost={project.services.cost}
                        desc={project.services.description}
                    />
                ))}  */}
            </Container>
            
        </div>
        
    )
        
}

export default Services;