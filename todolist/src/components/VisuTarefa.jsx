import { useState } from "react";
import './Tarefas.css'

function VisuTarefa ({titulo}) {

    const [CheckTarefa, setCheckTarefa] = useState(false);

    const alternarStatus = () => {
        setCheckTarefa(!CheckTarefa);
        style.button.className = !CheckTarefa ? "concluida" : "não concluida";
    }

    return (
        <div>
           <button  className={CheckTarefa ? "concluida" : "naoconcluida"} onClick={alternarStatus}> {titulo} -- {CheckTarefa ? "concluida" : "não concluida"}</button>
        </div>)
    }

export default VisuTarefa;