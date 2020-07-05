import React from 'react'
import './info.scss'
import { chooseColor } from '../Utils/utils'
export const Info = ({ info, rateCapture }) => {

    return (
        <React.Fragment>
            <div className="wrap-info">

                <h3 className="title">Basic Info</h3>
                <div className="text-wrap">
                    <div className="text-info">
                        <h5>
                            Name:
                            <span> {info.name}</span>
                        </h5>
                        <h5>
                            Weight:
                            <span> {info.weight} </span>
                        </h5>
                        <h5>
                            Height:
                            <span> {info.height} </span>
                        </h5>
                    </div>
                    <div className="text-info">
                        <h5>
                            Exp Base:
                            <span> {info.base_experience}</span>
                        </h5>
                        <h5>
                            Type :
                        {info.types.map((value, index) => {
                            let color = chooseColor(value.type.name);
                            return (
                                <span className="type-span" style={{ backgroundColor: color.bg, color: color.font }} key={index}>{value.type.name} </span>
                            )
                        })}


                        </h5>
                        <h5>
                            Rate Capture :
                            <span> {rateCapture}</span>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
