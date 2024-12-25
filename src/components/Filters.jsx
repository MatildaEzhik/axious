import React from "react";

const Filters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="filters">
            <select name="genre" value={filters.genre} onChange={handleChange}>
                <option value="">All Genres</option>
                <option value="comedy">Comedy</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                {/* Add more genres */}
            </select>
            <input
                type="number"
                name="year"
                placeholder="Year"
                value={filters.year}
                onChange={handleChange}
            />
            <input
                type="number"
                name="rating"
                placeholder="Min Rating"
                value={filters.rating}
                onChange={handleChange}
            />
            <select name="sort" value={filters.sort} onChange={handleChange}>
                <option value="">Sort By</option>
                <option value="rating">Rating</option>
                <option value="year">Year</option>
            </select>
        </div>
    );
};

export default Filters;
