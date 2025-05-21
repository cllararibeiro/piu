<<<<<<< HEAD
import { useState } from "react";
import Images from "./Images";
import Instagram from "./Instagram"

export default function Troca() {
    let [isLogged, setIsLogged] = useState(true);

    return (
        <>
            <div>
                <button onClick={() => setIsLogged(!isLogged)}>Trocar</button>
            </div>

            {isLogged ? <Images /> : <Instagram/>}
        </>
    );
}
=======
import { useState } from "react";
import Images from "./Images";
import Instagram from "./Instagram"

export default function Troca() {
    let [isLogged, setIsLogged] = useState(true);

    return (
        <>
            <div>
                <button onClick={() => setIsLogged(!isLogged)}>Trocar</button>
            </div>

            {isLogged ? <Images /> : <Instagram/>}
        </>
    );
}
>>>>>>> fb5d4ddab8b818b6a5e6939ff82d4b98aa9aa000
