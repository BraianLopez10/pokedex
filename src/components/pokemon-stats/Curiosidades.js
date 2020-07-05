import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './curiosidades.scss';

export const Curiosidades = ({ curiosidades }) => {
    const [text, setText] = React.useState([]);
    const [more, setMore] = React.useState(false);
    React.useEffect(() => {
        let text = []
        if (curiosidades) {
            text = curiosidades.filter((value) => (value.language.name === "es"))
            setText(text);
        }


    }, [curiosidades])

    const changeMore = () => {
        setMore(!more);
    }

    const limitText = () => {
        return (
            text.slice(0, 2).map((value, index) => {
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
            })
        )
    }

    const moreText = () => {
        return (
            text.map((value, index) => {
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
            })
        )
    }
    return (
        <div className="curiosidades">
            <h3 className="title">Curiosidades</h3>
            <ul>
                {!more && text.length > 2 ? (limitText()) : (moreText())}
                {text.length > 2 && (
                    <div onClick={changeMore} className="show">
                        {!more ? (
                            <React.Fragment>

                                <span><ArrowDropDownIcon style={{ width: "50px", height: "50px" }}></ArrowDropDownIcon></span>
                            </React.Fragment>) : (<React.Fragment>

                                <span><ArrowDropUpIcon style={{ width: "50px", height: "50px" }}></ArrowDropUpIcon></span>
                            </React.Fragment>)}
                    </div>)}
            </ul>
        </div >

    )
}
