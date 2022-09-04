import React from "react";
import "./pokedex.css";
import Buscador from "../Buscador/Buscador";
import { imagenes } from "../../imgs/imagenes";
import Tabla from "../Tabla/Tabla";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

function Pokedex({ url, nombreBuscador, setNombreBuscador, listaPokemon }) {
  function imagenPokedex() {
    let imagenNueva = imagenes.filter((imagen) => {
      if (imagen.nombre === nombreBuscador) {
        return imagen;
      }
    });

    if (imagenNueva.length === 0) {
      imagenes.map((imagen) => {
        if (imagen.nombre === "pokedex") {
          imagenNueva.push(imagen);
        }
      });
    }
    return imagenNueva[0].src;
  }

  return (
    <div className="main">
      <div className="divImagenMaster">
        <div className="divImagen">
          <div className="divStyleImagenUp">
            <div className="circuloChico colorNegro"></div>
            <div className="circuloChico colorNegro"></div>
          </div>
          <div className="imagen">
            <img
              src={imagenPokedex()}
              className="imagen"
              alt="imagen del Pokemon"
            />
          </div>
          <div className="divStyleImagenDown">
            <div className="circuloChico colorRojo"></div>
            <MenuIcon sx={{ color: "black" }}></MenuIcon>
          </div>
        </div>

        <div className="divDecorationLeft">
          <div className="divFlexVertical divMaxWH divCenterAll">
            <div className="circuloGrande colorNegro"></div>
          </div>
          <div className="divFlexVertical divMaxWH">
            <div className="divFlexHorizontal divMaxWH divCenterAll">
              <div className="rectanguloButton"></div>
              <div className="rectanguloButton"></div>
            </div>
            <div className="divFlexVertical divMaxWH">
              <div className="rectanguloScreen"></div>
            </div>
          </div>
          <div className="divFlexVertical divMaxWH divCenterAll">
            <AddIcon sx={{ color: "black", fontSize: 100 }}></AddIcon>
          </div>
        </div>
      </div>

      <div className="divDivider">
        <Divider orientation="vertical" flexItem />
      </div>

      <div className="divBuscadorTabla">
        <div className="divBuscador">
          <Buscador
            nombreBuscador={nombreBuscador}
            setNombreBuscador={setNombreBuscador}
            className="buscador"
          ></Buscador>
        </div>

        <div className="divDecorationRight divFlexVertical divMaxWH">
          <div className="divFlexHorizontal divMaxWH">
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
          </div>
          <div className="divFlexHorizontal divMaxWH">
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
            <div className="borderDecoration divMaxWH"></div>
          </div>
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
