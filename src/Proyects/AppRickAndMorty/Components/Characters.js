import { useEffect, useState } from "react";
import Personajes from "./Personajes";
import getCharacters from "../Services/getCharacters";

const Characters = ({ data }) => {
  console.log(data);
  const [datesCharacters, setDatesCharacters] = useState([]);

  useEffect(() => {
    const lista = [];
    data.map((c, index) => {
      getCharacters(c)
        .then((response) => {
          lista.push({
            name: response.data.name,
            gender: response.data.gender,
            status: response.data.status,
            species: response.data.species,
            type: response.data.type,
            img: response.data.image,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
    setDatesCharacters(lista);
  }, []);

  const list = datesCharacters.map((c) => (
    <Personajes name={c.name} status={c.status} key={c.img} />
  ));

  return <>{list}</>;
};

export default Characters;
