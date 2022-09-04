import React from "react";
import "./pokedex.css";
import Buscador from "../Buscador/Buscador";
import { imagenes } from "../../imgs/imagenes";
import Tabla from "../Tabla/Tabla";

function Pokedex({ url, nombreBuscador, setNombreBuscador, listaPokemon }) {

  function imagenPokedex() {

    let imagenNueva = imagenes.filter((imagen) => {
      if (imagen.nombre === nombreBuscador) {
        return imagen;
      }
    });

    if(imagenNueva.length === 0){
      imagenes.map((imagen) => {
        if (imagen.nombre === 'pokedex') {
          imagenNueva.push(imagen);
        }
      })
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
          <Buscador
            nombreBuscador={nombreBuscador}
            setNombreBuscador={setNombreBuscador}
            className="buscador"
          ></Buscador>
        </div>
        <div className="divTabla">
          <Tabla
            url={url}
            listaPokemon={listaPokemon}
            className="tabla"
          ></Tabla>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
