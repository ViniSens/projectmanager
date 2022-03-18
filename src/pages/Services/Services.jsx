import { Card } from 'antd';
import "antd/dist/antd.css";
import { useNavigate } from 'react-router-dom';
import "./Services.css"
import FormServices from './components/FormServices/FormServices';

function Services() {

    const history = useNavigate();

    function createService(){

    }

    return ( 
        <div className='newservice-container '>
        <Card title={<h1>Criar Serviço</h1>} className='card'>

            <p>Adicione os serviços do projeto.</p>
            <FormServices handleSubmit={createService} nameSubmit="Cadastrar serviço" nameClear="Limpar"/>
        
        </Card>
        </div>
     );
}

export default Services;