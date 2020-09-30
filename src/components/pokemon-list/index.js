import React, { useEffect } from "react";
import { chooseColor } from "../Utils/utils";
import "./index.scss";
export const PokemonList = ({ pokemon }) => {
  useEffect(() => {}, []);

  return (
    <div
      className="wrap-pokemon-list "
      style={{ backgroundColor: chooseColor(pokemon.types[0].type.name).bg }}
    >
      <a href={"/pokemon/" + pokemon.id}>
        <div className="wrap-img">
          <img src={pokemon.sprites.front_default} alt="pokemon-img"></img>
        </div>
        <h4 className="name">{pokemon.name}</h4>
        <div className="tipos">
          {pokemon.types.map((t, index) => {
            let color = chooseColor(t.type.name);
            return (
              <span
                key={index}
                style={{ backgroundColor: color.bg, color: color.font }}
              >
                <span> {t.type.name}</span>
              </span>
            );
          })}
        </div>
        <span className="span1">
          H <strong>{pokemon.height}</strong>
        </span>
        <span className="span2">
          W <strong>{pokemon.weight}</strong>
        </span>
      </a>
    </div>
  );
};
