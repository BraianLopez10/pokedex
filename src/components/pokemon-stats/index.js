import React, { useEffect } from 'react'
import { ImagePokemon } from './ImagePokemon'
import { Stats } from './Stats'
import { chooseColor } from '../Utils/utils'
import { Evolution } from './Evolution';
import { Curiosidades } from './Curiosidades'
import './index.scss';
import { Info } from './Info';
import { CircularProgress } from '@material-ui/core';

export const PokemonStats = (props) => {

    const [loading, setLoading] = React.useState(true);
    const [pokemon, setPokemon] = React.useState({})
    const [specie, setSpecie] = React.useState({});
    const [idPokemon, setIdPokemon] = React.useState(0);
    const [color, setColor] = React.useState("");


    useEffect(() => {
        let idPokemon = props.location.pathname.split('/')[2];
        setIdPokemon(idPokemon);
        if (idPokemon) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon;
            fetch(url).then((response) => {

                if (response.ok) return response.json()
            }).then((data) => {
                if (data) {
                    setPokemon(data);
                    fetch('https://pokeapi.co/api/v2/pokemon-species/' + idPokemon)
                        .then(response => {
                            if (response.ok)
                                return response.json()
                            else
                                return false
                        }).then((specie) => {
                            setSpecie(specie);
                        })
                    setColor(chooseColor(data.types[0].type.name).bg);
                    setLoading(false)
                }
            }).catch((err) => {

            })
        }
    }, [props.location.pathname])
    return (
        <div className="wrap-pokemon-stat" style={{ backgroundColor: color, color: "white" }}>
            {!loading ? (
                <React.Fragment>

                    <div >
                        <ImagePokemon idPokemon={idPokemon}></ImagePokemon>
                    </div>
                    <div >
                        <Stats stats={pokemon.stats} color={color}></Stats>
                    </div>
                    <div className="wrap-info-stat">
                        <Info info={pokemon} rateCapture={specie.capture_rate}  ></Info>
                    </div>



                    <div className="wrap-curiosidades-stat">
                        <Curiosidades curiosidades={specie.flavor_text_entries}></Curiosidades>
                    </div>

                    <div className="wrap-evolution-stat">
                        <Evolution idPokemon={idPokemon} ></Evolution>
                    </div>

                </React.Fragment>
            ) : (<CircularProgress></CircularProgress>)}

        </div >

    )
}