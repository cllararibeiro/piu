import { useState } from "react"
import "./Contadores.css"

export default function Contador(){
const [count, setCount] = useState(0)

    /*if (count > 10){
        const aumenta = getElementsByClassName("aumenta"); 
        aumenta.style.width = "50px";
 };

    if (count < 0){
        const aumenta = getElementsByClassName("aumenta"); 
        aumenta.style.width = "10px";
 }*/

    return(
        <div>
            <button onClick={() => setCount((count) => count + 1)} className="aumenta">Aumenta</button>
            <h2>{count}</h2>
            <button onClick={() => setCount((count) => count - 1)} className="diminui">Diminui</button>
        </div>
 )
}

/* O componente contadores serve para aplicar a funcionalidade dos botões.
um aumenta e o outro diminui o valor da tela ao ser clicado, entretanto as condicionais de aumentar e diminuir o tamanho do botão
conforme os valores não funcionaram. Não entendi meu erro, pois minha lógica parecia exata.*/