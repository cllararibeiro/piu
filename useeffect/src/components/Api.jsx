import { useState } from 'react';
import './Api.css';

export default function Api() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const [mostrarNomes, setMostrarNomes] = useState(false);
  const [mostrarUsernames, setMostrarUsernames] = useState(false);
  const [mostrarCidades, setMostrarCidades] = useState(false);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMostrarNomes = async () => {
    await fetchUsuarios();
    setMostrarNomes(true);
  };

  const handleMostrarUsernames = async () => {
    await fetchUsuarios();
    setMostrarUsernames(true);
  };

  const handleMostrarCidades = async () => {
    await fetchUsuarios();
    setMostrarCidades(true);
  };

  return (
    <div>
      <h1>Usuários da API</h1>

      {loading && <p>Carregando...</p>}

      <div className="tabelas-container">
        {/* Tabela de Nomes */}
        <div className="tabela">
          <h2>Nomes</h2>
          <button onClick={handleMostrarNomes}>Mostrar Nomes</button>
          {mostrarNomes && (
            <table>
              <thead><tr><th>Nome</th></tr></thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}><td>{usuario.name}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Tabela de Usernames */}
        <div className="tabela">
          <h2>Usernames</h2>
          <button onClick={handleMostrarUsernames}>Mostrar Usernames</button>
          {mostrarUsernames && (
            <table>
              <thead><tr><th>Username</th></tr></thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}><td>{usuario.username}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Tabela de Cidades */}
        <div className="tabela">
          <h2>Cidades</h2>
          <button onClick={handleMostrarCidades}>Mostrar Cidades</button>
          {mostrarCidades && (
            <table>
              <thead><tr><th>Cidade</th></tr></thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}><td>{usuario.address.city}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
