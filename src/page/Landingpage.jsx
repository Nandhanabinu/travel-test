import React from 'react'
import './landing.css'
import Button from 'react-bootstrap/Button';

import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigate = useNavigate();

const handleClick = ()=>{
 navigate ('./register');
}
  return (
   
    <div className='full'>
     <Header/>
      <div className='middle'>
        <div className="middle1"> <img width={"1280px"} height={"650px"} src="./public/main.png" alt="" /></div>
  
  
        <div className='middle2'>
          <div className='middlesec'>Cosm!c<p style={{ fontSize: '60px',
    color: 'rgb(223, 223, 223)',
    fontFamily: '"Dancing Script", cursive',
    fontOpticalSizing: 'auto',
    fontWeight: 600,
    fontStyle: 'normal'}}>Want To Talk to Aliens</p><p className='chat'>Let's begin your legendry chat with Aliens....</p>
          </div>
  
          <div className="mb-2">
            <Button onClick={handleClick} variant="light" size="lg">
              <span>    Get Started</span>
            </Button>
          </div>
        </div>
    </div>

    <div className='tab'>
        <div className='row'>
          <div className='col-7'>
          
           <div className='h'>   "I don't need no more human friends....!" </div>
              <br />
       <div className='p'>      “To expect alien technology to be just a few decades ahead of ours is too incredible to be taken seriously."</div>
            <div className='pa'>— Paul Davies</div>
          </div>
          
          <div className='col-5'>
            <img src="./public/middle.png" alt="" />
          </div>
        </div>
        <div className='row'>
        <div className="col-5"> <img src="./public/gid.gif" alt="" /></div>
          <div className="col-7">
      <div className='note'>
            The more we learn about the cosmos, the more it seems possible that we are not alone. The entire galaxy is teeming with worlds, and we’re getting better at listening — so the question, “Is there anybody out there?” is one we may be able to answer soon.
            Here is a platform which you should able to chat with aliens. 
      </div>
          <div className='caution'>CAUTION:They are hardly trying to reach earth, Never give them any hints which helps them while you were chating.BE CAREFUL</div>
          <div className="mb-2">
              <Button variant="light" size="lg">
                 KNOW MORE
              </Button>
             
            </div>
          </div>
        
        </div>
    </div>
       {/* <div className="blur-bg-overlay"></div> */}
     
  

    </div>
    
  )
}

export default Landingpage
