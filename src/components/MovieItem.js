export function MovieItem({movie}) {
    return (
        <div className="">
            {movie.poster_path &&
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt ={movie.title}></img>}
            <h3>{movie.tittle}</h3>
        </div>
    ) 
};
