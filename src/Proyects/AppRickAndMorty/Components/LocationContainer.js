import { useEffect, useState } from "react";
import getAllLocations from "../Services/getAllLocations.js";
import "../../Components/css/Estilos.css";

const SelectLocation = ({ handlerOnSelect }) => {
  let Random = (min = 0, max = 6) => {
    // funcion para creacion de numero random dentro de un rango determinado
    return Math.round(Math.random() * (max - min) + min); // regresamos el numero random
  };

  const [locations, setLocations] = useState([]);
  const [random, setRandom] = useState(Random(1, 7)); //uso de la funcion state para color

  useEffect(() => {
    getAllLocations(random)
      .then((response) => {
        console.log("/location?page=", random, response.data.results);
        setLocations(response.data.results);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  const list = locations.map((location, index) => (
    <option key={index}>{location.id}</option>
  ));

  return (
    <select onChange={(e) => handlerOnSelect(e.target.value)}>{list}</select>
  );
};

export default SelectLocation;
