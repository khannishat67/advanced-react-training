
export const addFavourite = (movie) => ({
    type: 'ADD_Favourite',
    movie
})

export const removeFavourite = (id) => (
    {

        type: 'REMOVE_Favourite',
        id
    }
)