// src/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.kinopoisk.dev",
    headers: {
        "X-API-KEY": process.env.REACT_APP_KINOPOISK_API_KEY,
    },
});

export default api;
