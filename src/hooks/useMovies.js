// Criação de um hook customizado - obrigatoriamente essa sintaxe
// Separar arquivos de hooks por contexto (Filmes - Domínio)
import { useEffect, useState } from "react";
import { getMovie, getPopularMovies } from "../services/movies.services";

// Lógica que depende de Estados
export function useMovies(){    
     // Criar um estado pois ele irá mudar - Vai começar com uma lista vazia e quando ela for executada em paralelo (Promise)
     const [movies, setMovies] = useState([]); // Renderizar inicialmente com vazio

     // Sei que dentro do objeto do Axios tenho uma propriedade chamada data, entao posso usar destructuring (desestruturação)
     useEffect(() => {
       getPopularMovies().then(({data}) => {
         setMovies(data.results);
       })
     }, [])
     // Esse [] é basicamente algo que vai ficar fazendo de "tanto em tanto tempo",
     // nesse caso vazio, somente uma vez
     return movies;
}

export function useMovie(movieId){
    const [movie, setMovie] = useState([]); // Renderizar inicialmente com vazio

    useEffect(() => {
      getMovie(movieId).then(({data}) => {
        setMovie(data);
      })
    }, [movieId]);


    return movie;
}