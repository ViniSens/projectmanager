import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Container from './components/layout/Container/Container';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import Project from './pages/Project/Project';


function App() {
  return (
    <Router>
      <NavBar/>
     
      <Container classVar="min-height">
        <Routes>
          
            <Route path="/" exact index element={<Home/>}></Route>
            <Route path="/project" exact element={<Project/>}></Route>
            <Route path="/company"  element={<Company/>}></Route>
            <Route path="/contact"  element={<Contact/>}></Route>
            <Route path="/newproject"  element={<NewProject/>}></Route>
          
        </Routes>
        </Container>
      
      <Footer/>
    </Router>
  );
}

export default App;
