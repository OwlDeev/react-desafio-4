import Pokedex from "./components/Pokedex/Pokedex";
import AppBarra from "./components/Header/AppBarra";
import "./App.css";
import MiApi from "./components/MiApi";
import { useState } from "react";

function App() {

  const [url, setUrl] = useState("");
  const [listaPokemon, setListaPokemon] = useState("");
  const [nombreBuscador, setNombreBuscador] = useState("");
  
  return (
    <div>
      <AppBarra></AppBarra>
      <MiApi nombreBuscador={nombreBuscador} setUrl={setUrl} setListaPokemon={setListaPokemon}></MiApi>
      <Pokedex url={url} nombreBuscador={nombreBuscador} setNombreBuscador={setNombreBuscador} listaPokemon={listaPokemon} className="pokedex"></Pokedex>
    </div>
  );
}

export default App;
