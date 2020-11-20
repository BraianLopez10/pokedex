import React from "react";
import "./index.scss";
export const Buscador = () => {
  const [valueInput, setValueInput] = React.useState("");
  const [pokemon, setPokemon] = React.useState({});
  React.useEffect(() => {
    if (valueInput.length > 3) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + valueInput)
        .then((res) => {
          if (res.status === 200) return res.json();
          else setPokemon({});
        })
        .then((data) => {
          if (data) setPokemon(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [valueInput]);

  const changueState = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <div className="wrap-buscador">
      <div>
        <input
          type="text"
          placeholder="search Pokemon"
          value={valueInput}
          onChange={changueState}
        ></input>
      </div>
      {Object.keys(pokemon).length > 0 && (
        <div className="result">
          <img src={pokemon.sprites["front_default"]} alt="front"></img>
        </div>
      )}
    </div>
  );
};
