import React, { useEffect, useState } from 'react'

export const Evolution = ({ idPokemon }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/evolution-chain/' + idPokemon)
            .then(response => {
                if (response.ok)
                    return response.json()
                else
                    return false
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])
    return (
        <div>
            {loading ? ("Cargando") : ("Cargué")}
        </div>
    )
}
