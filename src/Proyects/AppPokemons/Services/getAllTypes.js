import axios from "axios";

const getAllTypes = async () => {
  const URL = "https://pokeapi.co/api/v2/type/";
  const req = await axios.get(URL);
  return req;
};

export default getAllTypes;
