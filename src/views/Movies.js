// Views: Importante é a Interação com usuário final
import { MovieItem } from "../components/MovieItem";
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

            <div className="moviesList">
                {movies.map((movie) => <MovieItem movie={movie}/>)}
            </div>
    </section>
    );
}