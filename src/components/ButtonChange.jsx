import { useEffect, useState } from "react";
import React from "react";


const ButtonChange = ({}) => {
  const [dados, setDados] = useState([]);
  let change = false;

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI));
  }, [change]);
  return (
    <button className="btn-azul" type="button" onClick={(change = !change)}>
      Ver outro Animal
    </button>
  );
};

export default ButtonChange;

