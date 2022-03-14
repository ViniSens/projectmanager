
import {Link} from 'react-router-dom'
import logo from "../../imgs/folder.png"
import Company from '../../pages/Company/Company';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Project from '../../pages/Project/Project';
import Container from '../layout/Container';
import './NavBar.css'


function NavBar() {

    return ( 
        <nav className='navbar'>
            <Container>
                <Link to="/"><img src={logo} className="logo" alt="Logo"></img></Link>
                <ul className='list'>
                    <li className='item' ><Link to="/" element={<Home/>}>Home</Link></li>
                    <li className='item'><Link to="/project" element={<Project/>}>Projetos</Link></li>
                    <li className='item'><Link to="/company" element={<Company/>}>Empresa</Link></li>
                    <li className='item'><Link to="/contact" element={<Contact/>}>Contato</Link></li>
                    {/* <li><Link to="/newproject" element={<Home/>}>Novo projeto</Link></li> */}
                </ul>
            </Container>
        </nav>
    
    );
}

export default NavBar;