import React from "react";
import Likes from "./components/Likes";
import ControleNota from "./components/ControleNota";
import Votacao from "./components/Votacao";
import Carrinho from "./components/Carrinho";
import ConversorTemperatura from "./components/ConversorTemperatura";
import Progresso from "./components/Progresso";
import "./App.css"; // importa o CSS

function App() {
  return (
    <div className="container">
      <h1>Atividades com React e useState</h1>
      <div className="card"><Likes /></div>
      <div className="card"><ControleNota /></div>
      <div className="card"><Votacao /></div>
      <div className="card"><Carrinho /></div>
      <div className="card"><ConversorTemperatura /></div>
      <div className="card"><Progresso /></div>
    </div>
  );
}

export default App;
