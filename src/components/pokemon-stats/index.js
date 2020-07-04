import React, { useEffect } from 'react'
import { ImagePokemon } from './ImagePokemon'
import { Stats } from './Stats'
import { chooseColor } from '../Utils/utils'
import { Evolution } from './Evolution';
import './index.scss';
import { Info } from './Info';

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
        <div >
            {!loading ? (
                <React.Fragment>
                    <div className="wrap-top" style={{ backgroundColor: color, color: "white" }}>
                        <div className="wrap-img">
                            <ImagePokemon idPokemon={idPokemon}></ImagePokemon>
                            <Stats stats={pokemon.stats} color={color}></Stats>
                        </div>
                        <div className="info-pokemon">
                            <Info info={pokemon} rateCapture={specie.capture_rate} flavor_text={specie.flavor_text_entries} ></Info>

                        </div>

                    </div >
                    <div className="evolutions">
                        <Evolution idPokemon={idPokemon} ></Evolution>
                    </div>

                </React.Fragment>
            ) : ("Cargando...")}

        </div >

    )
}