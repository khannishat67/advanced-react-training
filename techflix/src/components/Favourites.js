import React from 'react'

export default ({movies}) => {

    return (
        <div>
        <h1>Favourites</h1>
            {
                movies.map((movie, idx) => <div key={idx}>movie.name <button>Add</button></div>)
            }
        </div>
    )
}