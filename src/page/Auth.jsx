import React from 'react'
import './login.css'
import { useState } from 'react'
import { Button,  Form, } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({ insideRegister }) {
    const [userInputs,setUserInputs] = useState({
        username:"", email:"",password:""
    })
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        if(userInputs.username && userInputs.email && userInputs.password ){
            if(insideRegister){
      navigate('/login');
            }
            else{
                navigate('/home')
            }
        }
        else{
toast.info("please fill the form completely")
        }
    }

    console.log(userInputs);
    return (
        <div style={{ width: '100%', height: '100vh',  }} className='d-flex  align-items-center '>
            <div className="form-popup">

                <div className="form-box ">
                    <div className="form-details">
                        <h2>{insideRegister ? "Register" : "Login"}</h2>

                        <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder' >Back to home <i className="fa solid fa-arrow-left me-2"></i></Link>
                    </div>
                    <br />
                    <br />

                    {insideRegister &&
                        <div className="form-box signup">
                            <div className="form-content">
                                <Form action="#">
                                    <div className="input-field">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control value={userInputs.username} onChange={e=> setUserInputs({...userInputs,username:e.target.value})} type="Username" placeholder="Username" />
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </div>}
                    <div className="form-content">
                        <Form action="#">
                            <div className="input-field">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control value={userInputs.email} onChange={e=> setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                            <div className="input-field">
                                <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                                    <Form.Label>Passsword</Form.Label>
                                    <Form.Control value={userInputs.password} onChange={e=> setUserInputs({...userInputs,password:e.target.value})} type="email" placeholder="password" />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='loginlast'>
                    <Button onClick={handleRegister} variant='dark' type="submit"> {insideRegister ? "Register" : "Login"}</Button> </div>
                <a href="#" className="forgot-pass-link"> {insideRegister ? "" : "Forgot password?"}</a>
                <div className="bottom-link">
                    {insideRegister ? "Already have an Account" : " Don't have an account?"}
                    <Link className="text-info" to={'/register'}><a href="#" id="signup-link">{insideRegister ? "login" : "Register"}</a></Link>
                </div>
            </div>
            <ToastContainer position='top-center' theme='coloured' autoClose={5000}/>
        </div>
    )
}

export default Auth
