import { useMovie } from "../../hooks/useMovies"
import { useParams } from "react-router-dom"
import style from "./MovieDetail.module.css"

export function MovieDetail() {
    // Hook do React Router Dom para buscar os parametros da URL, como Query String
    const { id } = useParams();
    const movie = useMovie(id);

    return (
        <section className={style.movie}>
            <figure className={style.imageContainer}>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt ={movie.title}/>)}
                </figure>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </section>
    )
};
