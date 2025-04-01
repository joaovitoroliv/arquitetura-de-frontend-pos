// Views: Importante é a Interação com usuário final
import { useMovies } from "../hooks/useMovies";
import "./movies.css"
import styles from "./Movies.module.css"

export function Movies() {
    const movies = useMovies(); 

    return (
    <section className={styles.moviesContainer}>
        <h1>
            Filmes populares

            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </h1>
    </section>);
    
}