import { useState, useEffect } from "react";

export default function Login() {
  const [nome, setNome] = useState("");
  const [palavra, setPalavra] = useState("");

  const handleName = (e) => setNome(e.target.value);
  const handlePalavra = (e) => setPalavra(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nome, palavra);

    setNome("");
    setSenha("");
  };

  useEffect(() => {
    if (palavra == "AlunoPIU"){
        document.body.style.backgroundColor = "limegreen";
        document.body.style.transition = "background-color 0.3s";}
    }, [palavra]);

  return (
    <div>
      <h1>Adivinhe a palavra passe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" onChange={handleName} value={nome} placeholder="Digite seu nome"/>
        </div>

        <div>
          <label>
            Palavra Passe:
            <input type="text" placeholder="Digite a palavra-passe" value={palavra} onChange={handlePalavra}/>
          </label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}


