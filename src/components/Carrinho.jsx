import React, { useState } from "react";

function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [valor] = useState(50.0); // valor fixo do produto

  const aumentar = () => setQuantidade(quantidade + 1);

  const diminuir = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const total = quantidade * valor;

  return (
    <div>
      <h2>Atividade 4 - Controle de Quantidade no Carrinho</h2>

      <p>📦 Produto: R$ {valor.toFixed(2)}</p>

      <div style={{ marginBottom: "12px" }}>
        <button onClick={diminuir} style={{ marginRight: 8 }}>
          ➖
        </button>
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          {quantidade}
        </span>
        <button onClick={aumentar} style={{ marginLeft: 8 }}>
          ➕
        </button>
      </div>

      <p>
        💰 Valor total: <strong>R$ {total.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default Carrinho;
