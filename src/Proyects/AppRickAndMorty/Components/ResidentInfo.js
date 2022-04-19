import { useEffect, useState } from "react";
import getCharacter from "../Services/ResidentContainer";
import Spinner from "./Spinner";

const Personajes = ({ url }) => {
  let Random = (min = 0, max = 5) => {
    // funcion para creacion de numero random dentro de un rango determinado
    return Math.round(Math.random() * (max - min) + min); // regresamos el numero random
  };
  let Neon = () => {
    // funcion para escoger un color aleatorio
    let numeroColor = Random(0, quantityColores); // escogemos un color del arreglo colores en la posición random
    setColor(colores[numeroColor]); // enviamos el nuevo color
  };

  let ChangeColor = () => {
    // funcion para escoger una cita aleatoria
    Neon(); // escogemos o cambiamos el color
  };

  const [datesCharacters, setDatesCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  let colores = ["v", "a", "ao", "r", "m", "r"]; //arreglo de colores
  let quantityColores = colores.length - 1; //indicamos la candidad de colores
  const [color, setColor] = useState(colores[Random(0, quantityColores)]); //uso de la funcion state para color

  useEffect(() => {
    getCharacter(url).then((response) => {
      setLoading(true);
      ChangeColor();
      setDatesCharacters({
        id: response.data.id,
        name: response.data.name,
        gender: response.data.gender,
        status: response.data.status,
        species: response.data.species,
        image: response.data.image,
        totalEpisodes: response.data.episode.length,
      });
    });
  }, [url]);

  return (
    <>
      {loading ? (
        <>
          <div className={` b-radius bDark t-normal ${color} mar-bottom`}>
            <div className="b-radius-S t-izquierda ">{`id: ${datesCharacters.id}`}</div>
            <div className="t-derecha">
              <span
                className={`${datesCharacters.status} b-radius-S pad`}
              >{`status: ${datesCharacters.status}`}</span>
            </div>
            <img
              className="b-radius-S mar"
              src={`${datesCharacters.image}`}
              alt=""
            />
            <div>{`name: ${datesCharacters.name} `}</div>
            <div className="t-izquierda">{`gender: ${datesCharacters.gender}`}</div>
            <div className="t-derecha">{`species: ${datesCharacters.species}`}</div>
            <div className="t-derecha">{`total Episodes: ${datesCharacters.totalEpisodes}`}</div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Personajes; /* 

, { status }, { species }, { type }, { image } */
