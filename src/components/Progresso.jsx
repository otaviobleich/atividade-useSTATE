import React, { useState } from "react";

function Progresso() {
  const [progresso, setProgresso] = useState(0);

  const aumentar = () => {
    setProgresso((prev) => Math.min(prev + 10, 100));
  };

  const diminuir = () => {
    setProgresso((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div>
      <h2>Atividade 6 - Barra de Progresso</h2>

      <div style={{ marginBottom: "12px" }}>
        <button onClick={diminuir} style={{ marginRight: 8 }}>
          -10%
        </button>
        <button onClick={aumentar}>+10%</button>
      </div>

      <div
        style={{
          width: "300px",
          height: "25px",
          border: "1px solid #000",
          borderRadius: "5px",
          margin: "0 auto",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            transition: "width 0.3s ease",
            borderRadius: "5px",
          }}
        />
      </div>

      <p>{progresso}%</p>
    </div>
  );
}

export default Progresso;
