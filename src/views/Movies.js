// Views: Importante é a Interação com usuário final
import { MovieItem } from "../components/movieItem/MovieItem";
import { useMovies } from "../hooks/useMovies";
import "./movies.css"
import styles from "./Movies.module.css"

export function Movies() {
    const movies = useMovies(); 

    return (
    <section className={styles.moviesContainer}>
        <h1>
        Filmes populares 
        </h1>

            <div className={styles.moviesList}>
                {movies.map((movie) => <MovieItem key={movie.id} movie={movie}/>)}
            </div>
    </section>
    );
}