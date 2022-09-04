import React from "react";
import "./Buscador.css";

function Buscador({ nombreBuscador, setNombreBuscador }) {

  const capturaNombrebuscar = (e) => {
    setNombreBuscador(e.target.value);
  };

  return (
    <div className="main">
      <input
        className="inputBuscar"
        label="Buscar pokemon"
        onChange={capturaNombrebuscar}
        value={nombreBuscador}
      ></input>
    </div>
  );
}

export default Buscador;
