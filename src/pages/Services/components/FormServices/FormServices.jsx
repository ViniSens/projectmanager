import "./FormServices.css"
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import Input from "../../../../components/Form/Input/Input";
import Buttons from "../../../../components/Form/Button/Buttons";
import TextArea from "../../../../components/Form/TextArea/TextArea";


function FormServices({handleSubmit,projectData, nameSubmit, nameClear}) {

    const {id} = useParams();
    const [project,setProject] = useState(projectData || {});

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

    const submit=(e)=>{
        e.preventDefault();
      //  console.log(project)
        handleSubmit(project);
    }

    function handleChange (e){

    }

    return (  
        <form className='form' onSubmit={submit}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder='Insira o valor total do serviço'
                handleOnChange={handleChange}
            />
            <TextArea
                name='description'
                text="Descrição do serviço"
                placeholder='Descreva sobre o serviço...'
                handleOnChange={handleChange}
            />
            <Buttons nameSubmit={nameSubmit} nameReset={nameClear}/>
        </form>
    );
}

export default FormServices;