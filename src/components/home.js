import React, { useEffect, useState } from 'react'
import { PokemonList } from './pokemon-list';
import { CircularProgress } from '@material-ui/core'
import './home.scss'
export const Home = () => {

    const [pokemonsData, setPokemonsData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        async function loadPokemons() {

            let response = await fetch('https://pokeapi.co/api/v2/pokemon')
            let data = await response.json();
            await getPokemonsDetails(data.results);
            setLoading(false);
        }

        loadPokemons();
    }, [])

    const getPokemonsDetails = async (data) => {

        let _pokemons = await Promise.all(data.map(async (p) => {
            let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + p.name);
            let poke = await result.json();
            return poke;
        }))

        setPokemonsData(_pokemons)
    }
    return (
        <div className="wrap-home">
            {loading && (
                <div >
                    <CircularProgress></CircularProgress>
                </div>
            )}
            {pokemonsData.map((p, index) => {
                return <PokemonList pokemon={p} key={index}></PokemonList>
            })}
        </div>
    )
}