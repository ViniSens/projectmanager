import { useEffect } from 'react';
import {useState} from 'react';
import Buttons from '../../../components/Form/Button/Buttons';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import './ProjectForm.css'
function ProjectForm({handleSubmit,projectData, nameSubmit, nameClear}) {

   const [categories, setCategories] = useState([]);

    const [project,setProject] = useState(projectData || {});

  useEffect(()=>{
    fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((resp)=> resp.json())
    .then((data)=>{setCategories(data)})
    .catch((err) => console.log(err))
  }, [])

  const submit=(e)=>{
      e.preventDefault();
    //  console.log(project)
      handleSubmit(project);
  }

  function handleChange(e){
      setProject({...project, [e.target.name]: e.target.value})
  }

  function handleCategory(e){
    setProject({...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }})
    
}


    return ( 
        <form className='form' onSubmit={submit}>
            <Input 
                type="text"
                text='Nome do projeto'
                name="name"
                placeholder="Insira o nome do projeto" 
                handleOnChange={handleChange}
                value={project.name ? project.name: ''}
            />
            <Input
             type="number"
             text='Orçamento do projeto'
             name="budget"
             placeholder="Insira o orçamento do projeto"
             handleOnChange={handleChange}
             value={project.budget? project.budget: ''}
            />
            <Select 
                name='categoriaId'
                text='Selecione uma categoria'
                optons={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id :''}    
            />
            <Buttons nameSubmit={nameSubmit} nameReset={nameClear}></Buttons>
            
        </form>
     )
}

export default ProjectForm;