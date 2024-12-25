import { useState, useEffect } from "react";
import api from "../api";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Filters from "./Filters";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState({
        genre: "",
        year: "",
        rating: "",
        sort: "",
    });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchMovies = async () => {
        try {
            const response = await api.get("/v1.3/movie", {
                params: {
                    ...filters,
                    page,
                    limit: 10, // Количество фильмов на страницу
                },
            });
            setMovies(response.data.docs);
            setTotalPages(response.data.pages);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [filters, page]);

    return (
        <div>
            <Filters filters={filters} setFilters={setFilters} />
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
};

export default MovieList;
