function Escopo(){
    const label = "Clique aqui"
    function handlelClick(){
        return(
            alert("Alerta")
        )
    }
    return (
        <>
        <div>
            <h2>TESTE DE COMPONENTES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio error dolore quod 
                expedita saepe placeat officia
                quam quae nemo similique laudantium suscipit ipsum mollitia quo inventore minus, dolorum earum!</p>
            <button onClick={()=> console.log("você clicou aqui")}>{label}</button>
        </div>
        <div>
            <button onClick={(handlelClick)}>{label}</button>
        </div>
        </>

    )
}

export default Escopo