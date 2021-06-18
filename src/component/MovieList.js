import React, {useState} from 'react'
import './index.css'

const MovieList = (props) => {
    const [srcImg, setSrcImg] = useState("")
    let { movie, isLoading } = props

    return (
        <div className="container-movie">
            <div id="openModal-about" className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <img src={srcImg} alt="img-modal" loading="lazy"/>
                </div>
            </div>
            {movie.map((data) =>
                (
                <div key={data.imdbID} className="movie-card ">
                    <div className="movie-content">
                        <div className="movie-img">
                            <a href="#openModal-about" onClick={() => setSrcImg(data.Poster)}>
                                <img src={data.Poster} alt={data.Title} loading="lazy"/>
                            </a>
                        </div>
                        <div className="movie-details">
                            <strong>Title: {data.Title}</strong>
                            <strong>Year: {data.Year}</strong>
                            <strong>Type: {data.Type}</strong>
                        </div>
                    </div>
                </div>
                )
            )}
            {isLoading ? <p>Loading More Movies</p> : null}
        </div>
    )
}

export default MovieList
