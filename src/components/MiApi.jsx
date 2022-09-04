import React from "react";
import { useEffect } from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

function MiApi({ nombreBuscador, setUrl, setListaPokemon }) {
  function newListPokemon(newList) {
    let newListPokemones = [];
    let idAutoIcrement = 1;
    for (const pokemon of newList) {
      var newPokemon = {
        name: pokemon.name,
        id: idAutoIcrement++,
      };
      newListPokemones.push(newPokemon);
    }
    return newListPokemones;
  }
  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = baseUrl;
      const resp = await fetch(urlFiltro);
      const respDatos = await resp.json();

      setUrl(newListPokemon(respDatos.results));
    };

    fetchDatos();
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      let urlFiltro = baseUrl;

      if (nombreBuscador !== "") {
        urlFiltro = baseUrl.trim() + nombreBuscador.trim();
        const resp = await fetch(urlFiltro);
        const respDatos = await resp.json();
        const objectPokemon = [];
        objectPokemon.push(respDatos);
        setListaPokemon(objectPokemon);
      } else {
        setListaPokemon("");
        const resp = await fetch(urlFiltro);
        const respDatos = await resp.json();

        setUrl(newListPokemon(respDatos.results));
      }
    };

    fetchDatos();
  }, [nombreBuscador]);

  return <div></div>;
}

export default MiApi;
