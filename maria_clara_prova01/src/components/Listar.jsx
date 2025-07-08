export default function Listar({carros}){
    return(
        <div>
            <h1>TODOS OS CARROS</h1>
            {carros.map(carro => (
            <div key={carro.id}>
                <h3>{carro.modelo} --- {carro.cor}</h3>
         </div>
         ))}
        </div>
 )
};

/* O componente  Listar serve para listar todos os carros. Nele foi utilizado o map, 
que vai percorrer a props enviada e criar uma div para cada elemento da array, logo em seguida vai ser exibido o modelo e a cor do carro*/