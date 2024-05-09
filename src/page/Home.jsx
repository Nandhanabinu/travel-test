import React from 'react'

import './login.css'

import { Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';
function Home() {
  const navig = useNavigate();
  const handleClick =()=> {
   
  
   navig('/alllist');
};

  return (
    <div >
      
      


        <div className='cos'>
          <div className='cos'><div className='helloo'><h1>Hello, oblivious...</h1></div>
  
            <div className='hello'><h4>Have fun chatting, be respectful and follow our chat rules</h4></div>
            <br />
            <br />
            <div className='row'>
  
  
  
            <div className='col-6'>  <Button onClick={handleClick} style={{ background:" -webkit-linear-gradient(rgb(18, 198, 93), #316b4d,#3c4250)", marginLeft: "400px",color:"purple", width: "180px", height: "60px", }} variant='outlined'>Start Chating</Button></div>
  
      <div className='col-6'>      <img src="./public/home.png" alt="" /></div>
  
          </div>
  
          </div>
        </div>
    
      

    

   </div>
  )
}

export default Home
