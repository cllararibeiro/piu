export default function Detalhes({ nome, descricao, imagem }) {
    if (!nome) return null;
  
    return (
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <img
          src={imagem}
          alt={nome}
          style={{ width: "90%", maxWidth: "400px", borderRadius: "8px" }}
        />
        <h2 style={{ marginTop: "1rem" }}>{nome}</h2>
        <p style={{ fontStyle: "italic" }}>{descricao}</p>
      </div>
    );
  }
  