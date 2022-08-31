import React from "react";
import { useState, useEffect } from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

function MiApi({url, setUrl}) {

    let filtro;

  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = baseUrl;

      if (filtro !== "") {
        urlFiltro = baseUrl + filtro;
        const resp = await fetch(urlFiltro);
        const respDatos = await resp.json();
        // setPokemon(respDatos);
      } else {
        const resp = await fetch(urlFiltro);
        const respDatos = await resp.json();
        setUrl(respDatos.results);
      }
    };

    fetchDatos();
  });

  return <div></div>;
}

export default MiApi;
