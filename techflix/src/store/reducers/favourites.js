const initialState = {
    favourites: []
}
export const favouriteReducer = (state, {type, movie, id}) => {
    switch(type) {
        case 'ADD_MOVIE':
            return {
                favourites: [...state.favourites, movie]
            }
        case 'REMOVE_MOVIE':
            return {
                favourites: state.favourites.filter(fav => fav.id !== id)
            }
    }
    return initialState
}