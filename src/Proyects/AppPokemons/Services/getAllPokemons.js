import axios from "axios";

const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const req = await axios.get(URL);
  return req;
};

export default getAllPokemons;
