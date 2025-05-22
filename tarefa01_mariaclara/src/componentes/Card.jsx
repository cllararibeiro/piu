export default function Card({ nome, imagem }) {
    return (
      <div style={{ width: "110px", textAlign: "center", cursor: "pointer" }}>
        <figure>
          <img
            src={imagem}
            alt={`Imagem de ${nome}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <figcaption style={{ marginTop: "0.3rem", fontWeight: "bold" }}>
            {nome}
          </figcaption>
        </figure>
      </div>
    );
  }
  