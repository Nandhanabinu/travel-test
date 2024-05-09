
import React from 'react'
import  { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './page/Home'

import Landingpage from './page/Landingpage'
import Footer from './components/Footer'
import './bootstrap.min.css'
import Auth from './page/Auth'
import Alllist from './components/Alllist'
import New from './components/New'

function App() {


  return (
    <>

    <Routes>
   
      <Route  path='/' element={<Landingpage/>}/>
      <Route  path='/home' element={<Home insideHome/>}/>
      <Route path='/alllist' element={<Alllist/>}/>
      <Route path='/new' element={<New/>}/>
      <Route  path='/login' element={<Auth/>}/>
      <Route  path='/register' element={<Auth insideRegister/>}/>
      <Route  path='/*' element={<Navigate to={'/'}/>}/>
    
     
    </Routes>

    <Footer/>

  
    </>
  )
}

export default App
