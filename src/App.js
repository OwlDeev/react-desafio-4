import Pokedex from "./components/Pokedex/Pokedex";
import AppBarra from "./components/Header/AppBarra";
import "./App.css";
import MiApi from "./components/MiApi";
import { useState } from "react";

function App() {

  const [url, setUrl] = useState("");
  const [listaPokemon, setListaPokemon] = useState("");
  
  return (
    <div>
      <AppBarra></AppBarra>
      <Pokedex listaPokemon={listaPokemon} className="pokedex"></Pokedex>
      <MiApi url={url} setUrl={setUrl} setListaPokemon={setListaPokemon}></MiApi>
    </div>
  );
}

export default App;
