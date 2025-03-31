import { moviesApi } from "../config/http";

// Essa requisição retorna um objeto do Axios e dentro desse objeto do Axios temos a resposta do servidor
export function getPopularMovies(){
    return moviesApi.get("movie/popular");
}

export function getMovie(movieId){
    return moviesApi.get(`movie/${movieId}`)
}