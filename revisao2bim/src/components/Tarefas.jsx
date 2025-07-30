import { useState, useEffect } from 'react';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tarefa) return;
    setLista([...lista, { texto: tarefa, concluida: false }]);
    setTarefa('');
  };

  const alternar = (i) => {
    const nova = [...lista];
    nova[i].concluida = !nova[i].concluida;
    setLista(nova);
  };

  useEffect(() => {
    document.querySelectorAll('li span').forEach((el, i) => {
      el.style.textDecoration = lista[i]?.concluida ? 'line-through' : 'none';
    });
  }, [lista]);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" checked={item.concluida} onChange={() => alternar(i)}/>
              <span>{item.texto}</span>
            </label>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
