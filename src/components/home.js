import React, { useEffect, useState } from 'react'
import { PokemonList } from './pokemon-list';
import './home.scss'
export const Home = () => {

    const [pokemonsData, setPokemonsData] = useState([]);

    useEffect(() => {

        async function loadPokemons() {

            let response = await fetch('https://pokeapi.co/api/v2/pokemon')
            let data = await response.json();
            console.log(data);
            await getPokemonsDetails(data.results);
        }

        loadPokemons();
    }, [])

    const getPokemonsDetails = async (data) => {

        let _pokemons = await Promise.all(data.map(async (p) => {
            console.log(p.name)
            let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + p.name);
            let poke = await result.json();
            return poke;
        }))

        setPokemonsData(_pokemons)
    }
    return (
        <div className="wrap-home">
            {pokemonsData.map((p, index) => {
                return <PokemonList pokemon={p} key={index}></PokemonList>
            })}
        </div>
    )
}