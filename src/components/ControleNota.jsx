import React, { useState } from "react";

function ControleNota() {
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");

  const valido = nome.trim() !== "" && nota !== "";
  const resultado =
    valido && Number(nota) >= 7 ? "Aprovado ✅" : valido ? "Reprovado ❌" : "";

  return (
    <div>
      <h2>Atividade 2 - Controle de Nota</h2>

      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />

        <input
          type="number"
          placeholder="Nota (0-10)"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          style={{ padding: 6 }}
        />
      </div>

      {valido ? (
        <p>
          O aluno <strong>{nome}</strong> está: <strong>{resultado}</strong>
        </p>
      ) : (
        <p>Preencha o nome e a nota para ver o resultado.</p>
      )}
    </div>
  );
}

export default ControleNota;
