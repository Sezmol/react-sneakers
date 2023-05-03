import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./types"

const initialState = {
    favorites: [{id: 1, image: '/img/sneakers1.jpg', name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999}]
}

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        case REMOVE_FROM_FAVORITES:
            return {...state, favorites: state.favorites.filter(elem => elem.id !== action.payload)}
        default: 
            return state
    }
}