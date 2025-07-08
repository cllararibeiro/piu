import { useState } from 'react'
import Contador from './components/Contadores'
import './App.css'
import { carros } from './components/dados_carros'
import Listar from './components/Listar'
import ListarDezenove from './components/ListarDezenove'

function App() {

  return (
    <>
      <Contador></Contador>
      <Listar carros = {carros}></Listar>
      <ListarDezenove carros = {carros}/>
    </>
  )
}

export default App

/* O componente  App está renderizando os outros componentes, de modo que os componentes listar e listardezenove
recebem a array carros no formato de props.*/