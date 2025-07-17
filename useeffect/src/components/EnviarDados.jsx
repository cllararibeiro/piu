import { useState } from 'react';

export default function EnviarDados() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const enviarUsuario = async (e) => {
    e.preventDefault();

    const dados = { nome, email };

    try {
      const response = await fetch('http://localhost:8000/usuarios/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        const usuarioCriado = await response.json();
        setStatus(`Usuário ${usuarioCriado.nome} criado com sucesso!`);
        setNome('');
        setEmail('');
      } else {
        setStatus('Erro ao criar usuário.');
      }
    } catch (error) {
      setStatus('Erro na requisição: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <form onSubmit={enviarUsuario}>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
