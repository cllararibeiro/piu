import { useState } from 'react'
import './App.css'
import VisuTarefa from './components/VisuTarefa'
import Tarefas from './components/Tarefas'
import Tema from './components/Tema'

function App() {

  return (
    <>
      <Tema/>
      {Tarefas.map((tarefa) => (
         <VisuTarefa titulo = {tarefa.titulo}/>
      ))}
    </>
  )
}

export default App

 