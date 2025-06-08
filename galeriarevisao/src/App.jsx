import './App.css'
import Tema from './components/Tema'
import Galeria from './components/Galeria'


const personagens = [
    { src: "src/assets/harry.jpg", titulo: "Harry Potter", descricao: "O garoto que sobreviveu" },
    { src: "src/assets/hermione.jpg", titulo: "Hermione Granger", descricao: "A mente brilhante de Hogwarts" },
    { src: "src/assets/ron.jpg", titulo: "Ron Weasley", descricao: "O melhor amigo leal e divertido" },
    { src: "src/assets/draco.jpg", titulo: "Draco Malfoy", descricao: "Um antagonista complexo" }
  ]

function App() {
  
  return (
    <>
      <Tema/>
      <Galeria personagens = {personagens}/>
    </>
  )
}

export default App
