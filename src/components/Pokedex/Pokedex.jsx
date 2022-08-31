import React from "react";
import "./pokedex.css";
import FetchDatos from "../FetchDatos";

function Pokedex() {
  return (
    <div className="main">
      <div className="divImagen">
        <div className="imagen">

        </div>
      </div>
      <FetchDatos></FetchDatos>
    </div>
  );
}

export default Pokedex;
