import { useState, useEffect } from 'react';

export default function Dados() {
  const [userId, setUserId] = useState(''); 
  const [posts, setPosts] = useState([]); 
  const [atualizar, setAtualizar] = useState(false); 
  const [loading, setLoading] = useState(false);

  const Buscar = async () => {
    setLoading(true);
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const dados = await resposta.json();
      const postsUser = dados.filter(post => post.userId === Number(userId));
      setPosts(postsUser);} 
      catch (erro) {console.error("Erro ao buscar álbuns:", erro);} 
      finally {setLoading(false);}
  };

  useEffect(() => {
    if (userId >= 1 && userId <= 10) {
      Buscar();
    } else {
      setPosts([]);
    }
  }, [atualizar]);

  const Clique = () => {
    setAtualizar(prev => !prev);
  };

  return (
    <div>
      <h2>Buscar posts por userID (1 a 10)</h2>

      <input type="text" min="1" max="10" value={userId} placeholder="Digite o userID" onChange={(e) => setUserId(e.target.value)}/>
      <button onClick={Clique}>Buscar Posts</button>

      {loading && <p>Carregando...</p>}

      {!loading && posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

