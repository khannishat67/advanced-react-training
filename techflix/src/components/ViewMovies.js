import React from 'react'

export default ({movies}) => {

    return (
        <div>
        <h1>Movies</h1>

            {
                movies.map((movie, idx) => <div key={idx}>movie.name <button>Add</button></div>)
            }
        </div>
    )
}