export default function ListarDezenove ({carros}){
    const carrosdezenove= carros.filter(carro => carro.ano >= 2019)

    return(
        <div className="2019">
            <h1>CARROS DE 2019 PRA FRENTE</h1>
            {carrosdezenove.map(carro => (
            <h3>{carro.modelo}</h3>
        ))}
        </div>
 )
};

/* O componente  ListarDezenove serve para listar todos os carros de ano maior igual a 2019. Nele foi utilizado o map, 
que vai percorrer a const carrosdezenove, a qual contém um filtro do ano dos carros da props (array) enviada e com isso 
criar div para cada elemento da const carrosdezenove*/