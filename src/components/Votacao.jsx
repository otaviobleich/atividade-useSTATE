import React, { useState } from "react";

function Votacao() {
  const [opcaoA, setOpcaoA] = useState(0);
  const [opcaoB, setOpcaoB] = useState(0);
  const [opcaoC, setOpcaoC] = useState(0);

  return (
    <div>
      <h2>Atividade 3 - Votação de Opções</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setOpcaoA(opcaoA + 1)} style={{ marginRight: 8 }}>
          Votar na opção A
        </button>

        <button onClick={() => setOpcaoB(opcaoB + 1)} style={{ marginRight: 8 }}>
          Votar na opção B
        </button>

        <button onClick={() => setOpcaoC(opcaoC + 1)}>
          Votar na opção C
        </button>
      </div>

      <h3>Placar:</h3>
      <p>🅰️ Opção A: {opcaoA} votos</p>
      <p>🅱️ Opção B: {opcaoB} votos</p>
      <p>🆑 Opção C: {opcaoC} votos</p>
    </div>
  );
}

export default Votacao;
