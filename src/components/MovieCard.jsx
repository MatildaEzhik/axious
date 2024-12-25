import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={movie.poster.url} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>{movie.year}</p>
            <p>Rating: {movie.rating.kp}</p>
        </div>
    );
};

export default MovieCard;








