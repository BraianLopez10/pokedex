import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'

export const ImagePokemon = ({ idPokemon }) => {

    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch('https://pokeres.bastionbot.org/images/pokemon/' + idPokemon + '.png')
            .then((response) => {
                if (response.ok)
                    return response.blob();
                else
                    return false
            }).then((data) => {
                if (data) {
                    let url = window.URL.createObjectURL(data)
                    setImg(url);
                    setLoading(false);
                }
            })
    }, [idPokemon])

    const styles = {
        img: {
            width: "100%",
            height: "100%",
            objectFit: "scale-down"
        },
        loading: {
            margin: "auto",
            width: "100px",
            height: "100px",
            marginTop: "100px"
        }
    }
    return (
        <div style={{ width: "352px", height: "352px", margin: "auto" }}>

            {loading ?
                (<CircularProgress color="primary" className="loading"></CircularProgress>)
                :
                (<img width="300px" className="image" height="300px" src={img} alt="pokemon"></img >)}
        </div>
    )
}
