
export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    movie
})

export const removeMovie = (id) => (
    {

        type: 'REMOVE_MOVIE',
        id
    }
)