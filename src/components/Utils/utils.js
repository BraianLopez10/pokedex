export const chooseColor = (type) => {

    switch (type) {
        case "normal":
            return {
                bg: "#C0C0C0",
                font: "white"
            }
        case "fighting":
            return {
                bg: "#9C6565",
                font: "white"
            }

        case "flying":
            return {
                bg: "#3DC7EF",
                font: "white"
            }

        case "poison":
            return {
                bg: "#C54CBB",
                font: "white"
            }

        case "ground":
            return {
                bg: "#D3B842",
                font: "white"
            }

        case "rock":
            return {
                bg: "#C08746",
                font: "white"
            }

        case "bug":
            return {
                bg: "#A8D049",
                font: "white"
            }

        case "ghost":
            return {
                bg: "#8F3774",
                font: "white"
            }

        case "steel":
            return {
                bg: "#C0C0C0",
                font: "black"
            }

        case "fire":
            return {
                bg: "#DB5B5B",
                font: "white"
            }

        case "water":
            return {
                bg: "#4984D0",
                font: "white"
            }

        case "grass":
            return {
                bg: "#49D098",
                font: "white"
            }

        case "electric":
            return {
                bg: "#F7E652",
                font: "black"
            }

        case "psychic":
            return {
                bg: "#BA7BC7",
                font: "white"
            }

        case "ice":
            return {
                bg: "#58CADA",
                font: "black"
            }

        case "dragon":
            return {
                bg: "#FFC062",
                font: "white"
            }

        case "dark":
            return {
                bg: "#C0C0C0",
                font: "white"
            }

        case "fairy":
            return {
                bg: "#E9A0D3",
                font: "white"
            }

        case "unknown":
            return {
                bg: "#C0C0C0",
                font: "white"
            }

        case "shadow":
            return {
                bg: "#C0C0C0",
                font: "white"
            }
        default:
            return {
                bg: "#C0C0C0",
                font: "white"
            }
    }

}

