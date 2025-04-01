// Views: Importante é a Interação com usuário final
import { useMovies } from "../hooks/useMovies";

export function Movies() {
    const movies = useMovies(); 

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