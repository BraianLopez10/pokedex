import React from 'react'
import './info.scss'
import { chooseColor } from '../Utils/utils'
export const Info = ({ info, rateCapture, flavor_text }) => {
    const [text, setText] = React.useState([]);
    React.useEffect(() => {
        let text = []
        if (flavor_text) {
            text = flavor_text.filter((value) => (value.language.name === "es"))
            setText(text);
        }


    }, [info, rateCapture, flavor_text])
    return (
        <React.Fragment>

            <h3 style={{ margin: "0px", padding: "0", color: "black" }}>Basic Info</h3>
            <div className="wrap-info">
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
            <div className="curiosidades">
                <h3>Curiosidades</h3>
                <ul>
                    {text.map((value, index) => {
                        return (
                            index > 0 ? (
                                value.flavor_text !== text[index - 1].flavor_text &&
                                (<li key={index}>
                                    <p style={{ color: "black" }} key={index}>{value.flavor_text}</p>
                                </li>)
                            ) : (<li key={index}>
                                <p style={{ color: "black" }} key={index}>{value.flavor_text}</p>
                            </li>)

                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}
