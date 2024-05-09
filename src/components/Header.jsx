import {React,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';




function Header() {
    const navigate = useNavigate();

    const handleClick = ()=>{
     navigate ('./register');
    }
  
  
    return (
        <div>


            <Navbar className='Nav'  data-bs-theme="dark" >
            
                <Container>
              
                  <Button onClick={handleClick} className='login-button' variant='light'><span>Sign Up to Chat</span> </Button>
                    <Nav className="meauto">
                        <Nav.Link  className='home' href="#home">home</Nav.Link>
                        <Nav.Link  className='Chatrooms'href="#features">Chat rooms</Nav.Link>
                        <Nav.Link to={'/register'} className='login' href="#pricing">Login</Nav.Link>
                    </Nav>
                    
      
                </Container>
            </Navbar>
          

    
     
        </div>
         

    )
    
   
      
      
}


export default Header
