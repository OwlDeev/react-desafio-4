import React from "react";
import "./pokedex.css";
// import FetchDatos from "../FetchDatos";
import Buscador from "../Buscador/Buscador";
import { imagenes } from "../../imgs/imagenes";
import Tabla from "../Tabla/Tabla";
// import { useState } from "react";

function Pokedex({url}) {
  let imagen = "";

  function imagenPokedex() {
    let imagenNueva;

    if (imagen === "") {
      imagenNueva = imagenes.filter((imagen) => {
        if (imagen.nombre === "pokedex") {
          return imagen;
        }
      });
    } else {
    }
    return imagenNueva[0].src;
  }

  return (
    <div className="main">
      <div className="divImagen">
        <div className="imagen">
          <img
            src={imagenPokedex()}
            className="imagen"
            alt="imagen del Pokemon"
          />
        </div>
      </div>
      {/* <FetchDatos></FetchDatos> */}
      <div className="divBuscadorTabla">
        <div className="divBuscador">
          <Buscador className="buscador"></Buscador>
        </div>
        <div className="divTabla">
          <Tabla url={url} className="tabla"></Tabla>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
