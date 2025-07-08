import { useState } from 'react';

export default function Lista() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa === '') return;
    setLista([...lista, { texto: tarefa, concluida: false }]);
    setTarefa('');
  };

  const alternarStatus = (index) => {
    const novaLista = [...lista];
    novaLista[index].concluida = !novaLista[index].concluida;
    setLista(novaLista);
  };

  return (
    <div>
      <h2>Lista de Tarefas React</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Digite a tarefa"/>
        <input type="submit" value="Adicionar" />
      </form>

      <ul>

        {lista.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" checked={item.concluida} onChange={() => alternarStatus(index)}/>
              <span style={{ textDecoration: item.concluida ? 'line-through' : 'none' }}>
                {item.texto}
              </span>
            </label>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
