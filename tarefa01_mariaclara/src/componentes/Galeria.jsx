import { useState } from "react";
import Card from "./Card";
import Detalhes from "./Detalhes";

export default function Galeria() {
  const personagens = [
    { src: "src/assets/harry.jpg", titulo: "Harry Potter", descricao: "O garoto que sobreviveu" },
    { src: "src/assets/hermione.jpg", titulo: "Hermione Granger", descricao: "A mente brilhante de Hogwarts" },
    { src: "src/assets/ron.jpg", titulo: "Ron Weasley", descricao: "O melhor amigo leal e divertido" },
    { src: "src/assets/draco.jpg", titulo: "Draco Malfoy", descricao: "Um antagonista complexo" },
    { src: "src/assets/snape.jpg", titulo: "Severo Snape", descricao: "Herói silencioso de Hogwarts" },
    { src: "src/assets/dumbledore.jpg", titulo: "Alvo Dumbledore", descricao: "O sábio diretor de Hogwarts" },
    { src: "src/assets/valdemort.jpg", titulo: "Lord Valdemort", descricao: "O vilão feio" },
  ];

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  return (
    <div style={{ padding: "2rem", textAlign: "center", minHeight: "100vh" }}>
      <h1>Galeria de Personagens</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
      >
        {personagens.map((personagem, i) => (
          <div key={i} onClick={() => setPersonagemSelecionado(personagem)}>
            <Card nome={personagem.titulo} imagem={personagem.src} />
          </div>
        ))}
      </div>

      {personagemSelecionado && (
        <Detalhes
          nome={personagemSelecionado.titulo}
          descricao={personagemSelecionado.descricao}
          imagem={personagemSelecionado.src}
        />
      )}
    </div>
  );
}
