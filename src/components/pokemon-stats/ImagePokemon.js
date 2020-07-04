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
        h4: {
            width: "100%",
            height: "100%",
        }
    }
    return (
        <React.Fragment>

            {loading ? (<CircularProgress color="primary" style={styles.h4}>Cargando...</CircularProgress>) : (<img style={styles.img} src={img} alt="pokemon"></img >)}
        </React.Fragment>
    )
}
