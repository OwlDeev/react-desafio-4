import Pokedex from "./components/Pokedex/Pokedex";
import AppBarra from "./components/Header/AppBarra";
import "./App.css";

function App() {
  return (
    <div>
      <AppBarra></AppBarra>
      <Pokedex className="pokedex"></Pokedex>
    </div>
  );
}

export default App;
