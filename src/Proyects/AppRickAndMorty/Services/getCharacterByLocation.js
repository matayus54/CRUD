import axios from "axios";

const getCharacterByLocation = async (location) => {
  /* const URL = `https://rickandmortyapi.com/api/location/?name=${location}`; */
  const URL = `https://rickandmortyapi.com/api/location/${location}`;
  const req = await axios.get(URL);
  return req;
};

export default getCharacterByLocation;
