
const initialState = {
    movies: []
}
export const movieReducer = (state, {type, movie, id}) => {
    switch(type) {
        case 'ADD_MOVIE':
            return {
                movies: [...state.movies, movie]
            }
        case 'REMOVE_MOVIE':
            return {
                movies: state.movies.filter(movie => movie.id !== id)
            }
    }
    return initialState
}