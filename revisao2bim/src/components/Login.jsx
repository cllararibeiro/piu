import { useState } from "react";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleName = (e) => setNome(e.target.value);
  const handleSenha = (e) => setSenha(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nome, senha);

    setNome("");
    setSenha("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="nome" onChange={handleName} value={nome} placeholder="Digite seu email"/>
        </div>

        <div>
          <label>
            Senha:
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={handleSenha}/>
          </label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
