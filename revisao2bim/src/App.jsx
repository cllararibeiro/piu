import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tema from './components/Tema'
import InputCor from './components/InputCor'
import Login from './components/Login'
import Listar from './components/Listar'

function App() {

  return (
    <>
      <Tema/>
      <Login/>
      <InputCor/>
      <Listar/>
    </>
  )
}

export default App
