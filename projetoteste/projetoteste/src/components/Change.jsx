import {useState} from "react"


export default function Change(){

    let [valor, setValor] = useState("maria")
    let [valor2, setValor2] = useState(1)

    function sets(){
        return(
        setValor(valor+valor2),
        setValor2(valor2+1)
        )
    
    }

    return(
        <div>
            <button onClick = {sets}>{valor}Cliques</button>
            <p>{valor2}</p>
        </div>
    )
}