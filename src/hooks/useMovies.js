// Criação de um hook customizado - obrigatoriamente essa sintaxe

import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

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