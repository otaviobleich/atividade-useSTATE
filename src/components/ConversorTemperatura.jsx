import React, { useState } from "react";

function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");

  // Fórmula: (Celsius * 9/5) + 32
  const fahrenheit =
    celsius !== "" ? ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2) : "";

  return (
    <div>
      <h2>Atividade 5 - Conversor de Temperatura</h2>

      <input
        type="number"
        placeholder="Digite em Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        style={{ marginRight: 10, padding: "6px" }}
      />

      {celsius !== "" && (
        <p>
          🌡️ {celsius}°C = <strong>{fahrenheit}°F</strong>
        </p>
      )}
    </div>
  );
}

export default ConversorTemperatura;
