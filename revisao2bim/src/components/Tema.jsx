import { useState, useEffect } from "react";

export default function Tema() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#f9f9f9";
    document.body.style.color = darkMode ? "#fff" : "#000";
    document.body.style.transition = "background-color 0.3s, color 0.3s";
    document.body.style.margin = "0";
  }, [darkMode]); // Executa sempre que darkMode mudar

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Mudar para tema {darkMode ? "Claro" : "Escuro"}
      </button>
    </div>
  );
}
