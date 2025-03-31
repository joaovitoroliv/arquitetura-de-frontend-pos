import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
    // Criar um estado pois ele irá mudar - Vai começar com uma lista vazia e quando ela for executada em paralelo (Promise)
    const [movies, setMovies] = useState([]); // Renderizar inicialmente com vazio

    // Sei que dentro do objeto do Axios tenho uma propriedade chamada data, entao posso usar destructuring (desestruturação)
    useEffect(() => {
      getPopularMovies().then(({data}) => {
        setMovies(data.results)
      })
    }, [])

    return (
    <section>
        <h1>
            Filmes populares

            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </h1>
    </section>);
    
}