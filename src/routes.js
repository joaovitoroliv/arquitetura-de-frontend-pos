// Arquivo de Rotas
// path: caminho de fato da rota
// element: comum a todas as páginas
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { MovieDetail } from "./views/movieDetail/MovieDetail";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/movies",
                element: <Movies/>
            },
            {
                path: "/movies/:id",
                element: <MovieDetail/>
            }
        ]
    }
])