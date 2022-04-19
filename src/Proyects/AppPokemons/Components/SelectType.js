import { useEffect, useState } from "react";
import getAllTypes from "../Services/getAllTypes.js";
import "../../Components/css/Estilos.css";

const SelectType = ({ handlerOnSelect }) => {
  const [typeArr, setTypeArr] = useState([]);

  useEffect(() => {
    getAllTypes()
      .then((response) => {
        console.log(response.data.results);
        setTypeArr(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const list = typeArr.map((item) => (
    <option key={item.name}>{item.name}</option>
  ));

  return (
    <select onChange={(e) => handlerOnSelect(e.target.value)}>{list}</select>
  );
};

export default SelectType;
