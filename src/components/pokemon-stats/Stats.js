import React from 'react'
import './stats.scss'
import { Bar } from '../Utils/Bar'
export const Stats = ({ stats, color }) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        if (stats)
            setLoading(false)
    }, [stats])
    return (
        <div className="wrap-stats">
            <h2>Stats</h2>
            {loading ? ("Cargando") : (


                stats.map((stat, index) => {
                    return (
                        <Bar key={index} porcentaje={stat.base_stat} titulo={stat.stat.name} color={color}></Bar>
                    )
                })

            )}
        </div>
    )
}
