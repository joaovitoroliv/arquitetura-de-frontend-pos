import axios from "axios";

// Instancia que vamos utilizar para configurar nossa aplicação - Objeto de Requisição
export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTE2ZjgxMTAxZDhmMzVhNzNkOWRiOWM3YmVhM2I2NiIsIm5iZiI6MTc0MzQ2MjQzOC4xODgsInN1YiI6IjY3ZWIyMDI2YjBhOWFjNzQxNThiZGQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XGKxRzDKPJLxwQ1dyAnP8pkdP5429sFsN0YDrhJ9nNc`
    }
});