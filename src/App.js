import React, {useState} from "react";
import "./App.css";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import Intervalo from "./components/Intervalo";

function App() {
  
  return (
    <div className="App">
      <h1>Projeto Redux</h1>
      <div className="linha">
        <Intervalo/>
      </div>
      <div className="linha">
        <Soma/>
        <Media/>
        <Sorteio/>
      </div>
    </div>
  );
}

export default App;
