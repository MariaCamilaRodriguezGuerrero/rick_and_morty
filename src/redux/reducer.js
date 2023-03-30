
const initialState = {
    myFavorites: [],
    allCharacters: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (personaje) => personaje.id !== action.payload
                ),
                allCharacters: state.allCharacters.filter(
                    (personaje) => personaje.id !== action.payload
                )

            }
        case "FILTER":
            return {
                ...state,
                myFavorites: state.allCharacters.filter(
                    (personaje) => personaje.gender === action.payload
                )
            }

        case "ORDER":
            console.log("esto ocurre "+ action.payload)
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}
export default rootReducer;

