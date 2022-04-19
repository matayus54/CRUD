import axios from "axios";

const getAllLocations = async (number) => {
  const URL = `https://rickandmortyapi.com/api/location?page=${number}`;
  const req = await axios.get(URL);
  return req;
};

export default getAllLocations;
