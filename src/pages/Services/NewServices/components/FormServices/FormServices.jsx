import "./FormServices.css"
import {useParams} from 'react-router-dom';
import { useState } from "react";
import Input from "../../../../../components/Form/Input/Input";
import Buttons from "../../../../../components/Form/Button/Buttons";
import TextArea from "../../../../../components/Form/TextArea/TextArea";


function FormServices({handleSubmit,projectData, nameSubmit, nameClear}) {

    const {id} = useParams();
    const [service,setService] =useState({})

    

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange (e){
        setService({...service, [e.target.name]: e.target.value})
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