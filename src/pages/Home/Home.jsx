import React from 'react';
import './Home.css'
import saving from "../../imgs/gerenciamento.png"
import LinkButton from '../../components/Button/LinkButton';

function Home() {
    return ( 
        <section className='home-container'>
            <div>
                <h1>Seja bem-vindo ao <span>ProManager</span></h1>
                <p>O melhor gerenciador de projetos do mercado.</p>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar um novo projeto" />
            </div>
            <img src={saving} alt="ProManager"></img>
        </section>
     );
}



export default Home;