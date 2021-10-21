import React from 'react'

function Singlemovie({movie}) {
    return (
        <div className="movie">
            <h2 style={{color:"white"}}>{movie.title}</h2>
            <p style={{color:"white"}}>{movie.overview}</p>
        </div>
    )
}

export default Singlemovie
