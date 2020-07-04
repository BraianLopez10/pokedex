import React from 'react';
import './bar.scss';


export const Bar = ({ porcentaje, titulo, color }) => {
    const style = {
        porcentaje: {
            width: porcentaje + '%',
            backgroundColor: color
        }
    }
    return (
        <React.Fragment>
            <h4 style={{ margin: 0, padding: 0, textAlign: "left", textTransform: "capitalize" }}>
                {titulo}
            </h4>
            <div className="wrap-bar">
                <div className="progress-bar" style={style.porcentaje}>
                    {porcentaje + " %"}
                </div>
            </div>
        </React.Fragment>
    )
}