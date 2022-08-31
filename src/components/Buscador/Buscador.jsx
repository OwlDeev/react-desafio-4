import React from "react";
import "./Buscador.css"
import Button from '@mui/material/Button';

function Buscador() {
  return (
    <div className="main">
      {/* <input value={filtro} onChange={capturaNombrebuscar}></input> */}
      <input className="inputBuscar" label="Buscar pokemon"></input>
      <Button className="buttonBuscar" variant="contained">Buscar</Button>
    </div>
  );
}

export default Buscador;
