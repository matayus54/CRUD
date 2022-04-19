import axios from "axios";

const getCharacter = async (urlCharacter) => {
  const URL = urlCharacter;
  const req = await axios.get(URL);
  return req;
};

export default getCharacter;
