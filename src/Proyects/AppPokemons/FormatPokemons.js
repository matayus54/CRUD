import "../Components/css/Estilos.css";
import { useEffect, useState } from "react";
import Pokemon from "./Components/Pokemon.js";
import getPokemonByType from "./Services/getPokemonByType.js";
import Search from "./Components/Search.js";
import SelectType from "./Components/SelectType.js";

function FormatPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [currentType, setCurrentType] = useState("normal");

  useEffect(() => {
    getPokemonByType(currentType)
      .then((response) => {
        setPokemons(response.data.pokemon);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentType]); /* 
  console.log(pokemons); */
  const list = pokemons.map((pokemon) => (
    <Pokemon name={pokemon.pokemon.name} key={pokemon.pokemon.name} />
  ));

  return (
    <div>
      <p>
        selecciona el tipo <SelectType handlerOnSelect={setCurrentType} />
        {/* {currentType} */}
      </p>

      <Search handlerSearch={setCurrentType} />
      <div className="containerColumnas container5Columnas estiloNormal estiloRedondeado">
        {list}
      </div>
    </div>
  );
}

export default FormatPokemons;
