import React, { useState } from 'react'
import './App.css'
import Conditional from './Component/Conditional'
import Counter from './Component/Counter'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Input from './Component/Input'


function App() {

  const [temp , setTemp] = useState('')
  const [show , setShow] = useState(false)

  function getValue(e){
   setTemp( e.target.value)
  }
   function show_Data(){
    setShow(true)
   }
  
 

  return (
    <>
<Input/>

    </>
  )
}

export default App
