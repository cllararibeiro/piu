import { useState } from "react"

function Form() {

    function Cadastrar(e){
        e.preventDefaut()
        console.log("Cadastrou usuário")
    }

    const [name,Setname] = useState("Clara")

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit = {Cadastrar}>
                <div>
                    <input type = "text"  id = "name" name = "name" 
                    value = {name}
                    onChange = {(e) => Setname(e.target.value)}
                    placeholder = "digite seu nome"/>
                </div>
                <div>
                    <input type = "password"  id = "password" name = "password" placeholder = "digite sua senha"/>
                </div>
                <div>
                    <input type = "submit" placeholder = "cadastrar"/>
                </div>
            </form>
        </div>

    )

}

export default Form