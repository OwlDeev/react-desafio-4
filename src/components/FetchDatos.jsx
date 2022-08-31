import { useState, useEffect } from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const FetchDatos = () => {
  const [datos, setDatos] = useState([]);
  // const [pokemon, setPokemon] = useState([]);
  const [filtro, setFiltro] = useState("");

  let idMap = 0;

  function idAutoIcrement() {
    return (idMap = idMap + 1);
  }

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
        setDatos(respDatos.results);
      }
    };

    fetchDatos();
  }, [filtro]);

  const capturaNombrebuscar = (e) => {
    setFiltro(e.target.value);
  };
  return (
    <>
      <h1>FetchDatos</h1>
      <input value={filtro} onChange={capturaNombrebuscar}></input>

      <ul>
        {datos.map((dato) => (
          <li key={idAutoIcrement()}>{dato.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchDatos;
