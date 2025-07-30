import { useState, useEffect } from "react";

export default function InputCor() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const cores = ["#ffffffff", "#f9c2ff", "#c2f9ff", "#c2ffc2", "#ffc2c2", "#fff9c2"];
    const cor = cores[texto.length % cores.length]; // Muda a cor conforme o tamanho do texto
    document.body.style.backgroundColor = cor;
    document.body.style.transition = "background-color 0.3s";
  }, [texto]);

  return (
    <div style={{ padding: "2rem" }}>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite algo..."/>
    </div>
  );
}
