import { useEffect, useState } from "react";
import Personajes from "./Components/ResidentInfo";
import SelectLocation from "./Components/LocationContainer";
import getCharacterByLocation from "./Services/getCharacterByLocation";
import Search from "./Components/SearchBox";

const FormatRickAndMorty = () => {
  let Random = (min = 0, max = 6) => {
    // funcion para creacion de numero random dentro de un rango determinado
    return Math.round(Math.random() * (max - min) + min); // regresamos el numero random
  };

  const [random, setRandom] = useState(Random(1, 126)); //uso de la funcion state para color

  const [allCharacters, setAllCharacters] = useState([]);

  const [currentLocation, setCurrentLocation] = useState(random);
  const [datesLocation, setDatesLocation] = useState({});

  useEffect(() => {
    getCharacterByLocation(currentLocation)
      .then((response) => {
        setAllCharacters(response.data.residents);

        setDatesLocation({
          name: response.data.name,
          type: response.data.type,
          population: response.data.residents.length,
          dimension: response.data.dimension,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentLocation]);

  const lista = allCharacters.map((c) => {
    return <Personajes url={c} key={c} />;
  });

  return (
    <>
      <div className="bDark-black pad-top b-radius-S ">
        <Search handlerSearch={setCurrentLocation} />
        select to location:
        <SelectLocation handlerOnSelect={setCurrentLocation} />
        <br />
        <div className="cColumns cColumns4">
          <div>
            {`id: ${random}`} <br /> {`location name: ${datesLocation.name} `}
          </div>
          <div>type: {datesLocation.type}</div>
          <div>population:{datesLocation.population}</div>
          <div>dimension: {datesLocation.dimension}</div>
        </div>
        <br />
        residents
        <div className="cColumns cColumns4  b-radius-S ">{lista}</div>
      </div>
    </>
  );
};

export default FormatRickAndMorty;
