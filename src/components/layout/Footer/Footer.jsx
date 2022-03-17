import React from 'react';
import { FaGithub } from "react-icons/fa";
import "./Footer.css"

function Fotter() {
    return ( 
        <footer className='footer'>
            <ul  className='list-social'> 
                <li>
                   <a href='https://github.com/ViniSens' target="_blank"> <FaGithub/ ></a>
                </li>
            </ul>
            <p className='copi-right'><span>ProManager</span> &copy; Vinicius Sens de Oliveira</p>
        </footer>
     );
}

export default Fotter;