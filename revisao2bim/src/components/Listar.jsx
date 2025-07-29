import { useState } from 'react';

export default function Listar() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [mostrarPosts, setMostrarPosts] = useState(false);

  const fetchPosts= async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMostrarPosts= async () => {
    await fetchPosts();
    setMostrarPosts(true);
  };


  return (
    <div>
      <h1>Posts da API</h1>

      {loading && <p>Carregando...</p>}

      <div className="tabelas-container">
        {/* Tabela de Nomes */}
        <div className="tabela">
          <button onClick={handleMostrarPosts}>Mostrar Posts</button>
          {mostrarPosts && (
            <table>
              <thead><tr><th>Titulo</th></tr></thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}><td>{post.title}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
       </div> 
    </div>
    );
}