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
