import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await api.get(`/v1.3/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <img src={movie.poster.url} alt={movie.name} />
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating.kp}</p>
            <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
        </div>
    );
};

export default MovieDetails;
